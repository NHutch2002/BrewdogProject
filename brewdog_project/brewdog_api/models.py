from django.db import models
from django.contrib.auth.backends import BaseBackend
from rest_framework import status
from rest_framework.response import Response

class EmailBackend(BaseBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                return user
            else:
                return None
        except User.DoesNotExist:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

def unique_company_email(company, email):
    if User.objects.filter(company_name=company).exists():
        return False
    elif User.objects.filter(email=email).exists():
        return False
    else:
        return True

class User(models.Model):
    USERNAME_FIELD = 'email'
    last_login = models.DateTimeField(blank=True, null=True)
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)

    def check_password(self, password):
        return self.password == password

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
