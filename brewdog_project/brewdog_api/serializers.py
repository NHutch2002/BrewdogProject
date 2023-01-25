from rest_framework import serializers
from .models import User, Calculator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "name", "company", "email", "phone", "password")

class CalculatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calculator
        fields = ("MainsGas", "Fuel", "Oil", "Coal", "Wood", "GridElectricity", "Electricity", "WFLandfill","WFReuse","WFCharity", "BottleRecycling","AluminiumRecycling","GWLandfill","GWRecycling","SpecialWaste")

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "password", "id")
