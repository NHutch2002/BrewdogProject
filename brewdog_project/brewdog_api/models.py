from django.db import models
from django.contrib.auth.backends import BaseBackend
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator, MinLengthValidator
    
# is this used?
def unique_company_email(company, email):
    if BrewdogUser.objects.filter(company_name=company).exists():
        return False
    elif BrewdogUser.objects.filter(email=email).exists():
        return False
    else:
        return True

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        print("token created!")


class BrewdogUser(models.Model):
    #USERNAME_FIELD = 'email'
    user = models.OneToOneField(User, related_name='brewdogUser', on_delete=models.CASCADE, unique=True)
    last_login = models.DateTimeField(blank=True, null=True)
    company = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=50, unique=True)

    def check_password(self, password):
        return self.password == password

    def __str__(self):
        return self.user.username


class Calculator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True)
    MainsGas = models.FloatField()
    Fuel = models.FloatField()
    Oil = models.FloatField()
    Coal = models.FloatField()
    Wood = models.FloatField()
    GridElectricity = models.FloatField()
    Electricity = models.FloatField()
    WFLandfill = models.FloatField()
    WFReuse = models.FloatField()
    WFCharity = models.FloatField()
    BottleRecycling = models.FloatField()
    AluminiumRecycling = models.FloatField()
    GWLandfill = models.FloatField()
    GWRecycling = models.FloatField()
    SpecialWaste = models.FloatField()
    CompanyGoodsDelivery = models.FloatField()
    ContractedGoodsDelivery = models.FloatField()
    Travel = models.FloatField()
    UKFlights = models.FloatField()
    InternationalFlights = models.FloatField()
    StaffCommute = models.FloatField()
    BeefLamb = models.FloatField()
    OtherMeat = models.FloatField()
    LobsterFarmedPrawn = models.FloatField()
    Fish = models.FloatField()
    MilkYogurt = models.FloatField()
    Cheese = models.FloatField()
    LocalFruitVegetables = models.FloatField()
    FreightFruitVegetables = models.FloatField()
    OtherDriedFood = models.FloatField()
    BeerKegs = models.FloatField()
    BeerCans = models.FloatField()
    BeerBottles = models.FloatField()
    LowBeerKegs = models.FloatField()
    LowBeerCans = models.FloatField()
    LowBeerBottles = models.FloatField()
    SoftDrinks = models.FloatField()
    Wine = models.FloatField()
    Spirits = models.FloatField()
    KitchenEquipment = models.FloatField()
    BuildingRepair = models.FloatField()
    CleaningProducts = models.FloatField()
    ITMarketing = models.FloatField()
    MainsWater = models.FloatField()
    Sewage = models.FloatField()
    

class CalculatorConstants(models.Model):
    MainsGas = models.FloatField()
    Fuel = models.FloatField()
    Oil = models.FloatField()
    Coal = models.FloatField()
    Wood = models.FloatField()
    GridElectricity = models.FloatField()
    Electricity = models.FloatField()
    WFLandfill = models.FloatField()
    WFReuse = models.FloatField()
    WFCharity = models.FloatField()
    BottleRecycling = models.FloatField()
    AluminiumRecycling = models.FloatField()
    GWLandfill = models.FloatField()
    GWRecycling = models.FloatField()
    SpecialWaste = models.FloatField()
    CompanyGoodsDelivery = models.FloatField()
    ContractedGoodsDelivery = models.FloatField()
    Travel = models.FloatField()
    UKFlights = models.FloatField()
    InternationalFlights = models.FloatField()
    StaffCommute = models.FloatField()
    BeefLamb = models.FloatField()
    OtherMeat = models.FloatField()
    LobsterFarmedPrawn = models.FloatField()
    Fish = models.FloatField()
    MilkYogurt = models.FloatField()
    Cheese = models.FloatField()
    LocalFruitVegetables = models.FloatField()
    FreightFruitVegetables = models.FloatField()
    OtherDriedFood = models.FloatField()
    BeerKegs = models.FloatField()
    BeerCans = models.FloatField()
    BeerBottles = models.FloatField()
    LowBeerKegs = models.FloatField()
    LowBeerCans = models.FloatField()
    LowBeerBottles = models.FloatField()
    SoftDrinks = models.FloatField()
    Wine = models.FloatField()
    Spirits = models.FloatField()
    KitchenEquipment = models.FloatField()
    BuildingRepair = models.FloatField()
    CleaningProducts = models.FloatField()
    ITMarketing = models.FloatField()
    MainsWater = models.FloatField()
    Sewage = models.FloatField()



    def __str__(self):
        return self.name
