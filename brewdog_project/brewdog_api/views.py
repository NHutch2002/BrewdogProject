from django.urls import reverse
from rest_framework import generics, status
from brewdog_api.models import BrewdogUser, Calculator
from brewdog_api.serializers import BrewdogUserSerializer, CalculatorSerializer, LoginSerializer, UserSerializer
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
            return Response(f"Error: UserSerializer serializers not valid - {userSerializer.errors}, {userSerializer.data}", status=status.HTTP_400_BAD_REQUEST)
        return Response(f"Error: BrewdogUserSerializer serializers not valid - {brewdogUserSerializer.errors}", status=status.HTTP_400_BAD_REQUEST)

    def get(self, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class CalculatorView(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = CalculatorSerializer
    queryset = Calculator.objects.all()

    def post(self, request, format=None):
        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponseRedirect(reverse('frontend:myresults'))
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
                return Response({'status': 'success', 'message': 'Login successful', 'token': token.key}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'User has been deactivated!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'status': 'error', 'message': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    # def authenticate(self, request, email=None, password=None, **kwargs):
    #     try:
    #         brewdogUser = BrewdogUser.objects.get(email=email)
    #         print(brewdogUser)
    #         user = brewdogUser.user
    #         print(user)
    #         if user:
    #             if user.check_password(password):
    #                 return user
    #             else:
    #                 return Response({'error': 'Pass'}, status=status.HTTP_400_BAD_REQUEST)
    #         else:
    #             return None
    #     except BrewdogUser.DoesNotExist:
    #         return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


    # def get(self, request, format=None):
    #     data = User.objects.all()
    #     serializer = LoginSerializer(data, many=True)
    #     return Response(serializer.data)

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