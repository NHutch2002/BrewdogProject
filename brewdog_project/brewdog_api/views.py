from django.shortcuts import render
from rest_framework import generics, status
from .models import User, Calculator
from .serializers import UserSerializer, CalculatorSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CalculatorView(APIView):
    serializer_class = CalculatorSerializer
    def post(self, request, format=None):
        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
