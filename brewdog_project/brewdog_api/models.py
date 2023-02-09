from django.db import models
from django.contrib.auth.backends import BaseBackend
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
    
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
    #user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    #created = models.DateTimeField(auto_now_add=True)
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

    def __str__(self):
        return self.name
