from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50, unique=True)
    email = models.CharField(max_length=50, unique=True)
    phone = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name
