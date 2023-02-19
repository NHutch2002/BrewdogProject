from django.test import TestCase
from django.db.utils import IntegrityError
from brewdog_api.models import BrewdogUser, Calculator, CalculatorConstants
from django.core.exceptions import ValidationError
from django.core import serializers

# Create your tests here.

class UserTests(TestCase):

    #Tests if a user's account is successfully created with the appropriate fields.
    def test_user_account_created(self):
        User1 = BrewdogUser(company='Brewdog', email='abc@gmail.com', phone='111')
        self.assertEqual((User1.company == 'Brewdog'), True)
        self.assertEqual((User1.email == 'abc@gmail.com'), True)
        self.assertEqual((User1.phone == '111'), True)


class CalculatorTests(TestCase):

    #Tests if a calculator instance is created with all the fields having integer values
    def test_calculator_values(self):
        Calc = Calculator(MainsGas=10, Fuel=10, Oil=10, Coal=10, Wood=10, GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        Calc.save()
        self.assertEqual((Calc.MainsGas == 10), True)
        self.assertEqual((Calc.Fuel == 10), True)
        self.assertEqual((Calc.Oil == 10), True)
        self.assertEqual((Calc.Coal == 10), True)
        self.assertEqual((Calc.Wood == 10), True)
        self.assertEqual((Calc.GridElectricity == 10), True)
        self.assertEqual((Calc.Electricity == 10), True)
        self.assertEqual((Calc.WFLandfill == 10), True)
        self.assertEqual((Calc.WFReuse == 10), True)
        self.assertEqual((Calc.WFCharity == 10), True)
        self.assertEqual((Calc.BottleRecycling == 10), True)
        self.assertEqual((Calc.AluminiumRecycling == 10), True)
        self.assertEqual((Calc.GWLandfill == 10), True)
        self.assertEqual((Calc.GWRecycling == 10), True)
        self.assertEqual((Calc.SpecialWaste == 10), True)

    #Tests if a validation error is raised if the user has typed in letters instead of integers for the Fuel field.
    def test_fuel_integers_only(self):
        Calc = Calculator(MainsGas=10, Fuel='ten', Oil=10, Coal=10, Wood=10, GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        self.assertRaises(ValidationError, Calc.full_clean)

    #Tests if a validation error is raised if the user has typed in a negative value for the Fuel field.
    def test_fuel_positive_integers_only(self):
        Calc = Calculator(MainsGas=10, Fuel=-10, Oil=10, Coal=10, Wood=10, GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        self.assertRaises(ValidationError, Calc.full_clean)


class CalculatorConstantsTests(TestCase):

    #Tests if a validation error is raised if the user has typed in a negative constant for the Fuel constant field.
    def test_fuel_positive_integers_only(self):
        Calc = CalculatorConstants(MainsGas=10, Fuel=-10, Oil=10, Coal=10, Wood=10, GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        self.assertRaises(ValidationError, Calc.full_clean)
