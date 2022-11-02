from django.shortcuts import render
from rest_framework import viewsets
from .serializers import brewdogCalculatorSerializer
from .models import brewdogCalculator

# Create your views here.

class brewdogCalculatorView(viewsets.ModelViewSet):
    serializer_class = brewdogCalculatorSerializer
    queryset = brewdogCalculator.objects.all()

