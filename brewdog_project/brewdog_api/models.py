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
    MainsGas = models.IntegerField(validators=[
            MinValueValidator(0)])
    Fuel = models.IntegerField(validators=[
            MinValueValidator(0)])
    Oil = models.IntegerField(validators=[
            MinValueValidator(0)])
    Coal = models.IntegerField(validators=[
            MinValueValidator(0)])
    Wood = models.IntegerField(validators=[
            MinValueValidator(0)])
    GridElectricity = models.IntegerField(validators=[
            MinValueValidator(0)])
    Electricity = models.IntegerField(validators=[
            MinValueValidator(0)])
    WFLandfill = models.IntegerField(validators=[
            MinValueValidator(0)])
    WFReuse = models.IntegerField(validators=[
            MinValueValidator(0)])
    WFCharity = models.IntegerField(validators=[
            MinValueValidator(0)])
    BottleRecycling = models.IntegerField(validators=[
            MinValueValidator(0)])
    AluminiumRecycling = models.IntegerField(validators=[
            MinValueValidator(0)])
    GWLandfill = models.IntegerField(validators=[
            MinValueValidator(0)])
    GWRecycling = models.IntegerField(validators=[
            MinValueValidator(0)])
    SpecialWaste = models.IntegerField(validators=[
            MinValueValidator(0)])


class CalculatorConstants(models.Model):
    MainsGas = models.FloatField(validators=[
            MinValueValidator(0)])
    Fuel = models.FloatField(validators=[
            MinValueValidator(0)])
    Oil = models.FloatField(validators=[
            MinValueValidator(0)])
    Coal = models.FloatField(validators=[
            MinValueValidator(0)])
    Wood = models.FloatField()
    GridElectricity = models.FloatField(validators=[
            MinValueValidator(0)])
    Electricity = models.FloatField(validators=[
            MinValueValidator(0)])
    WFLandfill = models.FloatField(validators=[
            MinValueValidator(0)])
    WFReuse = models.FloatField(validators=[
            MinValueValidator(0)])
    WFCharity = models.FloatField(validators=[
            MinValueValidator(0)])
    BottleRecycling = models.FloatField(validators=[
            MinValueValidator(0)])
    AluminiumRecycling = models.FloatField(validators=[
            MinValueValidator(0)])
    GWLandfill = models.FloatField(validators=[
            MinValueValidator(0)])
    GWRecycling = models.FloatField(validators=[
            MinValueValidator(0)])
    SpecialWaste = models.FloatField(validators=[
            MinValueValidator(0)])



    def __str__(self):
        return self.name
