from django.shortcuts import render
from django.urls import reverse
from rest_framework import generics, status
from .models import User, Calculator
from .serializers import UserSerializer, CalculatorSerializer
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
            #return Response(serializer.data, status=status.HTTP_201_CREATED)
            return HttpResponseRedirect(reverse('frontend:myresults'))
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        data = Calculator.objects.all()
        serializer = CalculatorSerializer(data, many=True)
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('frontend:carboncalculator'))
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format=None):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)

#view to return data to front end 
class ReturnDataView(generics.ListAPIView):
    serializer_class = CalculatorSerializer
    queryset = Calculator.objects.all()
    def get(self, request, format=None):
        data = Calculator.objects.all()
        serializer = CalculatorSerializer(data, many=True)
        return Response(serializer.data)


# @method_decorator(api_view(['POST', 'GET']), name='dispatch')
# @method_decorator(renderer_classes([JSONRenderer]), name='dispatch')
# @method_decorator(ensure_csrf_cookie, name='dispatch')
# class CalculatorView(APIView):
#     serializer_class = CalculatorSerializer
#     def get (self, request, format=None):
#         data = Calculator.objects.all()
#         serializer = CalculatorSerializer(data, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = CalculatorSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)