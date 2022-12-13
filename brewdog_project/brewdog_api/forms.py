from django import forms
from .models import Calculator

class CalculatorForm(forms.ModelForm):
    MainsGas = forms.IntegerField()
    Fuel = forms.IntegerField()
    Oil = forms.IntegerField()
    Coal = forms.IntegerField()
    Wood = forms.IntegerField()
    GridElectricity = forms.IntegerField()
    Electricity = forms.IntegerField()
    WFLandfill = forms.IntegerField()
    WFReuse = forms.IntegerField()
    WFCharity = forms.IntegerField()
    BottleRecycling = forms.IntegerField()
    AluminiumRecycling = forms.IntegerField()
    GWLandfill = forms.IntegerField()
    GWRecycling = forms.IntegerField()
    SpecialWaste = forms.IntegerField()

    class Meta:
        model = Calculator
        fields = ['MainsGas', 'Fuel', 'Oil', 'Coal', 'Wood', 'GridElectricity', 'Electricity', 'WFLandfill', 'WFReuse', 'WFCharity', 'BottleRecycling', 'AluminiumRecycling', 'GWLandfill', 'GWRecycling', 'SpecialWaste']