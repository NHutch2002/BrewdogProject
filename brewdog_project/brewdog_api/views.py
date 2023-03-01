from django.urls import reverse
from rest_framework import generics, status
from brewdog_api.models import BrewdogUser, Calculator, CalculatorConstants
from brewdog_api.serializers import BrewdogUserSerializer, UserUpdateSerializer, CalculatorSerializer, LoginSerializer, UserSerializer, CalculatorConstantsSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    # register user
    def post(self, request, format=None):
        userData = {}
        for key, value in request.data.items():
            userData[key] = value

        # the creation of the BrewdogUser instance is done inside UserSerializer create method,
        # BrewdogUserSerializer is just used for pre-processing and pre-validation
        brewdogUserSerializer = BrewdogUserSerializer(data=request.data)
        if brewdogUserSerializer.is_valid():
            userData["brewdogUser"] = brewdogUserSerializer.data
            userSerializer = UserSerializer(data=userData)
            if userSerializer.is_valid():
                user = userSerializer.save()
                return HttpResponseRedirect(reverse('frontend:carboncalculator'))
            return Response(f"Error: Invalid details- {userSerializer.errors}", status=status.HTTP_400_BAD_REQUEST)
        return Response(f"Error: Invalid details- {brewdogUserSerializer.errors}", status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        id = request.GET.get('id')
        if id:
            data = User.objects.get(id=id)
            print(data)
            serializer = UserSerializer(data)
            print(serializer.data)
            return Response(serializer.data)

    def put(self, request, format=None):
        userData = {}
        for key, value in request.data.items():
            userData[key] = value
        user = User.objects.get(id=request.data.get('id'))
        brewdogUser = BrewdogUser.objects.get(email=user.brewdogUser.email)
        brewdogUserSerializer = BrewdogUserSerializer(brewdogUser, data=userData["brewdogUser"])
        userData.pop("brewdogUser")
        userSerializer = UserUpdateSerializer(user, data=userData)
        if brewdogUserSerializer.is_valid() and userSerializer.is_valid():
            brewdogUserSerializer.save()
            userSerializer.save()
            return Response("User updated successfully", status=status.HTTP_200_OK)
        return Response(f"Details already exist- {brewdogUserSerializer.errors},{userSerializer.errors}", status=status.HTTP_400_BAD_REQUEST)

class CalculatorView(generics.CreateAPIView):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    serializer_class = CalculatorSerializer
    queryset = Calculator.objects.all()

    def post(self, request, format=None):
        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data.get('id'), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        data = Calculator.objects.all()
        serializer = CalculatorSerializer(data, many=True)
        return Response(serializer.data)


class LoginView(APIView):
    serializer_class = LoginSerializer

    # login user
    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')
        brewdogUser = BrewdogUser.objects.get(email=email)
        print(brewdogUser.user.username, password)
        user = authenticate(username=brewdogUser.user.username, password=password)
        print(user)
        if user:
            if user.is_active:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
                print(token.key)
                return Response({'status': 'success', 'message': 'Login successful', 'token': token.key, 'user': user.id }, status=status.HTTP_200_OK)
            else:
                return Response({'Error': 'User has been deactivated!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'Error': ' Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class CalculatorConstantsView(generics.CreateAPIView):
    serializer_class = CalculatorConstantsSerializer
    queryset = CalculatorConstants.objects.all()

    def post(self, request, format=None):
        serializer = CalculatorConstantsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def get(self, request, format=None):
        data = CalculatorConstants.objects.all()
        serializer = CalculatorConstantsSerializer(data, many=True)
        return Response(serializer.data)


# view to obtain a auth token for user
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })