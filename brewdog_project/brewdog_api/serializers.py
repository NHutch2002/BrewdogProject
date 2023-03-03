from rest_framework import serializers
from django.contrib.auth.models import User
from brewdog_api.models import Calculator, BrewdogUser, CalculatorConstants


class BrewdogUserSerializer(serializers.ModelSerializer):
    """BrewdogUser serializer.

    This serializer is used to serialize the BrewdogUser model.
    """

    class Meta:
        """Meta class for BrewdogUserSerializer."""

        model = BrewdogUser
        fields = ["company", "email", "phone"]

class UserUpdateSerializer(serializers.ModelSerializer):
    """User update serializer.

    This serializer is used to serialize the User model.
    """

    class Meta:
        """Meta class for UserUpdateSerializer."""

        model = User
        fields = ["id", "username", "password"]

class UserSerializer(serializers.ModelSerializer):
    """User serializer.

    This serializer is used to serialize the User model.
    """

    brewdogUser = BrewdogUserSerializer()

    class Meta:
        """Meta class for UserSerializer."""

        model = User
        fields = ["id", "username", "password", "brewdogUser"]

    def create(self, validated_data):
        """Create a new user and a new brewdog user.

        The method is overwritten to also create BrewdogUser object,
        which is related to the User object.
        """

        brewdog_user_data = validated_data.pop("brewdogUser")
        user = User.objects.create(**validated_data)
        user.set_password(user.password)
        user.save()
        BrewdogUser.objects.create(user=user, **brewdog_user_data)
        return user


class CalculatorSerializer(serializers.ModelSerializer):
    """Calculator serializer.

    This serializer is used to serialize the Calculator model.
    """

    class Meta:
        """Meta class for CalculatorSerializer."""

        model = Calculator
        fields = ("id", "MainsGas", "Fuel", "Oil", "Coal", "Wood", "GridElectricity",
            "Electricity", "WFLandfill","WFReuse","WFCharity", "BottleRecycling",
            "AluminiumRecycling","GWLandfill","GWRecycling","SpecialWaste","CompanyGoodsDelivery",
            "ContractedGoodsDelivery", "Travel", "UKFlights","InternationalFlights", "StaffCommute",
            "BeefLamb", "OtherMeat", "LobsterFarmedPrawn", "Fish", "MilkYogurt", "Cheese",
            "LocalFruitVegetables", "FreightFruitVegetables", "OtherDriedFood", "BeerKegs",
            "BeerCans", "BeerBottles", "LowBeerKegs", "LowBeerCans", "LowBeerBottles", "SoftDrinks",
            "Wine", "Spirits", "KitchenEquipment", "BuildingRepair", "CleaningProducts",
            "ITMarketing", "MainsWater", "Sewage")


class LoginSerializer(serializers.ModelSerializer):
    """Login serializer.

    This serializer is used to serialize the User model.
    """

    class Meta:
        """Meta class for LoginSerializer."""

        model = User
        fields = ("id", "username", "password", "brewdogUser")


class CalculatorConstantsSerializer(serializers.ModelSerializer):
    """Calculator constants serializer.

    This serializer is used to serialize the CalculatorConstants model.
    """

    class Meta:
        """Meta class for CalculatorConstantsSerializer."""

        model = CalculatorConstants
        fields = ("MainsGas", "Fuel", "Oil", "Coal", "Wood", "GridElectricity", "Electricity",
            "WFLandfill","WFReuse","WFCharity", "BottleRecycling","AluminiumRecycling","GWLandfill",
            "GWRecycling","SpecialWaste","CompanyGoodsDelivery", "ContractedGoodsDelivery",
            "Travel", "UKFlights", "InternationalFlights", "StaffCommute", "BeefLamb", "OtherMeat",
            "LobsterFarmedPrawn", "Fish", "MilkYogurt", "Cheese", "LocalFruitVegetables",
            "FreightFruitVegetables", "OtherDriedFood", "BeerKegs", "BeerCans", "BeerBottles",
            "LowBeerKegs", "LowBeerCans", "LowBeerBottles", "SoftDrinks", "Wine", "Spirits",
            "KitchenEquipment", "BuildingRepair", "CleaningProducts", "ITMarketing", "MainsWater",
            "Sewage")
