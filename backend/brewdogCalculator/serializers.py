from rest_framework import serializers
from .models import brewdogCalculator

class brewdogCalculatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = brewdogCalculator
        fields = ('breweryName', 'userName')
