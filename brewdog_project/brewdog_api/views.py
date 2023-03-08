"""Views for the brewdog_api app.

The views module contains the views for the brewdog_api app.
"""
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from brewdog_api.models import BrewdogUser, Calculator, CalculatorConstants
from brewdog_api.serializers import BrewdogUserSerializer, UserUpdateSerializer, CalculatorSerializer, LoginSerializer, UserSerializer, CalculatorConstantsSerializer


class UserView(generics.CreateAPIView):
    """User view.

    User view is used to register a new user, update users and retrieve user by id.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request):
        """Register a new user."""

        user_data = {}
        for key, value in request.data.items():
            user_data[key] = value

        # the creation of the BrewdogUser instance is done inside UserSerializer create method,
        # BrewdogUserSerializer is just used for pre-processing and pre-validation
        brewdog_user_serializer = BrewdogUserSerializer(data=request.data)
        if brewdog_user_serializer.is_valid():
            user_data["brewdogUser"] = brewdog_user_serializer.data
            user_serializer = UserSerializer(data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return HttpResponseRedirect(reverse('frontend:carboncalculator'))
            return Response(f"Error: Invalid details- {user_serializer.errors}",
                            status=status.HTTP_400_BAD_REQUEST)
        return Response(f"Error: Invalid details- {brewdog_user_serializer.errors}",
                        status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        """Retrieve user by id."""

        id = request.GET.get('id')
        if id:
            data = User.objects.get(id=id)
            print(data)
            serializer = UserSerializer(data)
            print(serializer.data)
            return Response(serializer.data)
        return Response("No id provided", status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """Update user by id."""

        user_data = {}
        for key, value in request.data.items():
            user_data[key] = value
        user = User.objects.get(id=request.data.get('id'))
        brewdog_user = BrewdogUser.objects.get(email=user.brewdogUser.email)
        brewdog_user_serializer = BrewdogUserSerializer(brewdog_user, data=user_data["brewdogUser"])
        user_data.pop("brewdogUser")
        user_serializer = UserUpdateSerializer(user, data=user_data)
        if brewdog_user_serializer.is_valid() and user_serializer.is_valid():
            brewdog_user_serializer.save()
            user_serializer.save()
            return Response("User updated successfully", status=status.HTTP_200_OK)
        return Response(
            f"Details already exist- {brewdog_user_serializer.errors},{user_serializer.errors}",
            status=status.HTTP_400_BAD_REQUEST)

class CalculatorView(generics.CreateAPIView):
    """Calculator view.

    Calculator view is used to create a new calculator instance, retrieve all calculator
    instances and retrieve a calculator instance by id.
    """
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = CalculatorSerializer
    queryset = Calculator.objects.all()

    def post(self, request):
        """Create a new calculator instance."""

        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponseRedirect(reverse('frontend:myresults'))
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        """Retrieve all calculator instances."""

        data = Calculator.objects.all()
        serializer = CalculatorSerializer(data, many=True)
        return Response(serializer.data)


class LoginView(APIView):
    """Login view.

    Login view is used to login a user.
    """
    serializer_class = LoginSerializer

    def post(self, request):
        """Login a user."""

        email = request.data.get('email')
        password = request.data.get('password')
        brewdog_user = BrewdogUser.objects.get(email=email)
        print(brewdog_user.user.username, password)
        user = authenticate(username=brewdog_user.user.username, password=password)
        print(user)
        if user:
            if user.is_active:
                login(request, user)
                token, _ = Token.objects.get_or_create(user=user)
                print(token.key)
                return Response({'status': 'success', 'message': 'Login successful',
                                 'token': token.key, 'user': user.id }, status=status.HTTP_200_OK)
            return Response({'Error': 'User has been deactivated!'},
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'Error': ' Invalid Credentials'},
                            status=status.HTTP_401_UNAUTHORIZED)


class CalculatorConstantsView(generics.CreateAPIView):
    """Calculator constants view.

    Calculator constants view is used to create a new calculatorConstants instance,
    and to retrieve them
    """

    serializer_class = CalculatorConstantsSerializer
    queryset = CalculatorConstants.objects.all()

    def post(self, request):
        """Create a new calculatorConstants instance."""

        serializer = CalculatorConstantsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def get(self, request):
        """Retrieve all calculatorConstants instances."""

        data = CalculatorConstants.objects.all()
        serializer = CalculatorConstantsSerializer(data, many=True)
        return Response(serializer.data)


class CustomAuthToken(ObtainAuthToken):
    """Custom auth token.

    Custom auth token is used to obtain a token for a user.
    """

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })
