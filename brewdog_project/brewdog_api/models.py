from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(instance=None, created=False, **kwargs):
    """Create a token for a new user."""

    if created:
        Token.objects.create(user=instance)
        print("token created!")


class BrewdogUser(models.Model):
    """BrewdogUser model.

    This model is used to store the data from the BrewdogUser.
    """

    user = models.OneToOneField(User, related_name='brewdogUser',
                                on_delete=models.CASCADE, unique=True)
    last_login = models.DateTimeField(blank=True, null=True)
    company = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=50, unique=True)

    def check_password(self, password):
        """Check the password of the user."""

        return self.password == password

    def __str__(self):
        """Return the name of the brewdog user."""

        return self.user.username


class Calculator(models.Model):
    """Calculator model.

    This model is used to store the data from the calculator.
    """

    MainsGas = models.IntegerField()
    Fuel = models.IntegerField()
    Oil = models.IntegerField()
    Coal = models.IntegerField()
    Wood = models.IntegerField()
    GridElectricity = models.IntegerField()
    Electricity = models.IntegerField()
    WFLandfill = models.IntegerField()
    WFReuse = models.IntegerField()
    WFCharity = models.IntegerField()
    BottleRecycling = models.IntegerField()
    AluminiumRecycling = models.IntegerField()
    GWLandfill = models.IntegerField()
    GWRecycling = models.IntegerField()
    SpecialWaste = models.IntegerField()
    CompanyGoodsDelivery = models.IntegerField()
    ContractedGoodsDelivery = models.IntegerField()
    Travel = models.IntegerField()
    UKFlights = models.IntegerField()
    InternationalFlights = models.IntegerField()
    StaffCommute = models.IntegerField()
    BeefLamb = models.IntegerField()
    OtherMeat = models.IntegerField()
    LobsterFarmedPrawn = models.IntegerField()
    Fish = models.IntegerField()
    MilkYogurt = models.IntegerField()
    Cheese = models.IntegerField()
    LocalFruitVegetables = models.IntegerField()
    FreightFruitVegetables = models.IntegerField()
    OtherDriedFood = models.IntegerField()
    BeerKegs = models.IntegerField()
    BeerCans = models.IntegerField()
    BeerBottles = models.IntegerField()
    LowBeerKegs = models.IntegerField()
    LowBeerCans = models.IntegerField()
    LowBeerBottles = models.IntegerField()
    SoftDrinks = models.IntegerField()
    Wine = models.IntegerField()
    Spirits = models.IntegerField()
    KitchenEquipment = models.IntegerField()
    BuildingRepair = models.IntegerField()
    CleaningProducts = models.IntegerField()
    ITMarketing = models.IntegerField()
    MainsWater = models.IntegerField()
    Sewage = models.IntegerField()

class CalculatorConstants(models.Model):
    """CalculatorConstants model.

    This model is used to store the constants for each field from the calculator.
    """

    MainsGas = models.FloatField(validators=[
            MinValueValidator(0)])
    Fuel = models.FloatField(validators=[
            MinValueValidator(0)])
    Oil = models.FloatField(validators=[
            MinValueValidator(0)])
    Coal = models.FloatField(validators=[
            MinValueValidator(0)])
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
        """Return the name of the calculator constant."""

        return self.name
