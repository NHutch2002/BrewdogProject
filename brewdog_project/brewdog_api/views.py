from django.shortcuts import render
from rest_framework import generics, status
from .models import User, Calculator
from .serializers import UserSerializer, CalculatorSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer

# Create your views here.

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@method_decorator(api_view(['POST']), name='dispatch')
@method_decorator(renderer_classes([JSONRenderer]), name='dispatch')
@method_decorator(ensure_csrf_cookie, name='dispatch')
class CalculatorView(APIView):
    serializer_class = CalculatorSerializer
    def post(self, request, format=None):
        serializer = CalculatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
