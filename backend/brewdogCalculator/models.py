from django.db import models

# Create your models here.
class brewdogCalculator(models.Model):
    breweryName = models.CharField(max_length=200)
    userName = models.CharField(max_length=200)
    

    def __str__(self):
        return self.breweryName
