from django.shortcuts import render
from django.urls import reverse
from rest_framework import generics, status
from .models import User, Calculator, EmailBackend
from .serializers import UserSerializer, CalculatorSerializer, LoginSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login

# Create your views here.

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponseRedirect(reverse('frontend:carboncalculator'))
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, format=None):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)


class CalculatorView(generics.CreateAPIView):
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
    def post(self, request, format=None):
        email1 = request.data.get('email')
        password1 = request.data.get('password')
        user = EmailBackend().authenticate(request, email=email1, password=password1)
        if user is not None:
            login(request, user)
            return Response({'status': 'success', 'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error', 'message': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    
    def get(self, request, format=None):
        data = User.objects.all()
        serializer = LoginSerializer(data, many=True)
        return Response(serializer.data)