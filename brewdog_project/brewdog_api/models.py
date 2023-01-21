from django.db import models

# Create your models here.

def unique_company_email(company, email):
    if User.objects.filter(company_name=company).exists():
        return False
    elif User.objects.filter(email=email).exists():
        return False
    else:
        return True

class User(models.Model):
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)

class Calculator(models.Model):
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
