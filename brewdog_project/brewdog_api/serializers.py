from rest_framework import serializers
from brewdog_api.models import Calculator, BrewdogUser, CalculatorConstants
from django.contrib.auth.models import User

class BrewdogUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrewdogUser
        fields = ["company", "email", "phone"]

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

class UserSerializer(serializers.ModelSerializer):
    brewdogUser = BrewdogUserSerializer()
    
    class Meta:
        model = User
        fields = ["id", "username", "password", "brewdogUser"] 

    def create(self, validated_data):
        print("create here!")
        brewdogUserData = validated_data.pop("brewdogUser")
        user = User.objects.create(**validated_data)
        user.set_password(user.password)
        user.save()
        brewdogUser = BrewdogUser.objects.create(user=user, **brewdogUserData)
        return user


class CalculatorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Calculator
        fields = ("id", "MainsGas", "Fuel", "Oil", "Coal", "Wood", "GridElectricity", "Electricity", "WFLandfill","WFReuse","WFCharity", "BottleRecycling","AluminiumRecycling","GWLandfill","GWRecycling","SpecialWaste",
                  "CompanyGoodsDelivery", "ContractedGoodsDelivery", "Travel", "UKFlights", "InternationalFlights", "StaffCommute", "BeefLamb", "OtherMeat", "LobsterFarmedPrawn", "Fish", "MilkYogurt", "Cheese", "LocalFruitVegetables", "FreightFruitVegetables", "OtherDriedFood", "BeerKegs", "BeerCans", "BeerBottles", "LowBeerKegs", "LowBeerCans", "LowBeerBottles", "SoftDrinks", "Wine", "Spirits", "KitchenEquipment", "BuildingRepair", "CleaningProducts", "ITMarketing", "MainsWater", "Sewage")


class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("id", "username", "password", "brewdogUser")


class CalculatorConstantsSerializer(serializers.ModelSerializer):

    class Meta:
        model = CalculatorConstants
        fields = ("MainsGas", "Fuel", "Oil", "Coal", "Wood", "GridElectricity", "Electricity", "WFLandfill","WFReuse","WFCharity", "BottleRecycling","AluminiumRecycling","GWLandfill","GWRecycling","SpecialWaste",
        "CompanyGoodsDelivery", "ContractedGoodsDelivery", "Travel", "UKFlights", "InternationalFlights", "StaffCommute", "BeefLamb", "OtherMeat", "LobsterFarmedPrawn", "Fish", "MilkYogurt", "Cheese", "LocalFruitVegetables", "FreightFruitVegetables", "OtherDriedFood", "BeerKegs", "BeerCans", "BeerBottles", "LowBeerKegs", "LowBeerCans", "LowBeerBottles", "SoftDrinks", "Wine", "Spirits", "KitchenEquipment", "BuildingRepair", "CleaningProducts", "ITMarketing", "MainsWater", "Sewage")