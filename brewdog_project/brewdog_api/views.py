from django.urls import reverse
from rest_framework import generics, status
from brewdog_api.models import BrewdogUser, Calculator, EmailBackend
from brewdog_api.serializers import BrewdogUserSerializer, CalculatorSerializer, LoginSerializer, UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


# Create your views here.

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
        email1 = request.data.get('email')
        password1 = request.data.get('password')
        user = EmailBackend().authenticate(request, email=email1, password=password1)
        print(user.name)
        if user is not None:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'status': 'success', 'message': 'Login successful', 'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error', 'message': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    # def get(self, request, format=None):
    #     data = User.objects.all()
    #     serializer = LoginSerializer(data, many=True)
    #     return Response(serializer.data)