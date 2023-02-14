from django.test import TestCase
from django.db.utils import IntegrityError
from brewdog_api.models import User
from brewdog_api.models import Calculator
from django.core.exceptions import ValidationError

# Create your tests here.

class UserTests(TestCase):

    #Tests if a user's account is successfully created with the appropriate fields.
    def test_user_account_created(self):
        User1 = User(name='George', company='Brewdog', email='abc@gmail.com', phone='111', password='f72Nei!cr?Di3d')
        User1.save()
        self.assertEqual((User1.name == 'George'), True)
        self.assertEqual((User1.company == 'Brewdog'), True)
        self.assertEqual((User1.email == 'abc@gmail.com'), True)
        self.assertEqual((User1.phone == '111'), True)
        self.assertEqual((User1.password == 'f72Nei!cr?Di3d'), True)

    # Tests if a validation error is raised if the user has not typed in an email address.
    def test_empty_email_not_allowed(self):
        User2 = User(name='John', company='Brewdog', phone='111', password='f72Nei!cr?Di3d')
        User2.save()
        self.assertRaises(ValidationError, User2.full_clean)

    # Tests if a company name cannot be used more than once.
    def test_unique_company(self):
        User3 = User(name='John', company='Brewdog', email='abc@gmail.com', phone='111', password='f72Nei!cr?Di3d')
        User3.save()
        User4 = User(name='David', company='Brewdog', email='def@gmail.com', phone='222', password='g72Nei!cr?Di3d')
        self.assertRaises(ValidationError, User4.full_clean)

#class NavigationTests(TestCase):


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

