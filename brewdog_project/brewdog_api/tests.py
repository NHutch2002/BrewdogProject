from django.test import TestCase
from django.db.utils import IntegrityError
from brewdog_api.models import User
from brewdog_api.models import Calculator
from django.core.exceptions import ValidationError

# Create your tests here.


#class NavigationTests(TestCase):


class CalculatorTests(TestCase):

    #Tests if a calculator instance is created with all the fields having integer values
    def test_calculator_values(self):
        Calc = Calculator(MainsGas=10, Fuel=10, Oil=10, Coal=10, Wood=10, GridElectricity=10, 
                          Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, 
                          AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10, 
                          CompanyGoodsDelivery=10, ContractedGoodsDelivery=10, Travel=10, UKFlights=10, 
                          InternationalFlights=10, StaffCommute=10, BeefLamb=10, OtherMeat=10, 
                          LobsterFarmedPrawn=10, Fish=10, MilkYogurt=10, Cheese=10, 
                          LocalFruitVegetables=10, FreightFruitVegetables=10, OtherDriedFood=10, 
                          BeerKegs=10, BeerCans=10, BeerBottles=10, LowBeerKegs=10, LowBeerCans=10, 
                          LowBeerBottles=10, SoftDrinks=10, Wine=10, Spirits=10, KitchenEquipment=10, 
                          BuildingRepair=10, CleaningProducts=10, ITMarketing=10, MainsWater=10, 
                          Sewage=10)
        Calc.save()
        self.assertEqual((Calc.MainsGas == 10), True)
        self.assertEqual((Calc.Fuel == 10), True)
        self.assertEqual((Calc.Oil == 10), True)
        self.assertEqual((Calc.Coal == 10), True)
        self.assertEqual((Calc.Wood == 10), True)N
        self.assertEqual((Calc.GridElectricity == 10), True)
        self.assertEqual((Calc.Electricity == 10), True)
        self.assertEqual((Calc.WFLandfill == 10), True)
        self.assertEqual((Calc.WFReuse == 10), True)
        self.assertEqual((Calc.WFCharity == 10), True)
        self.assertEqual((Calc.BottleRecycling == 10), True)
        self.assertEqual((Calc.AluminiumRecycling == 10), True)
        self.assertEqual((Calc.GWLandfill == 10), True)
        self.assertEqual((Calc.GWRecycling == 10), True)
        self.assertEqual((Calc.CompanyGoodsDelivery == 10), True)
        self.assertEqual((Calc.ContractedGoodsDelivery == 10), True)
        self.assertEqual((Calc.Travel == 10), True)
        self.assertEqual((Calc.UKFlights == 10), True)
        self.assertEqual((Calc.InternationalFlights == 10), True)
        self.assertEqual((Calc.BeefLamb == 10), True)
        self.assertEqual((Calc.OtherMeat == 10), True)
        self.assertEqual((Calc.LobsterFarmedPrawn == 10), True)
        self.assertEqual((Calc.Fish == 10), True)
        self.assertEqual((Calc.MilkYogurt == 10), True)
        self.assertEqual((Calc.Cheese == 10), True)
        self.assertEqual((Calc.LocalFruitVegetables == 10), True)
        self.assertEqual((Calc.FreightFruitVegetables == 10), True)
        self.assertEqual((Calc.BeerKegs == 10), True)
        self.assertEqual((Calc.BeerCans == 10), True)
        self.assertEqual((Calc.BeerBottles == 10), True)
        self.assertEqual((Calc.LowBeerKegs == 10), True)
        self.assertEqual((Calc.LowBeerCans == 10), True)
        self.assertEqual((Calc.LowBeerBottles == 10), True)
        self.assertEqual((Calc.SoftDrinks == 10), True)
        self.assertEqual((Calc.Wine == 10), True)
        self.assertEqual((Calc.Spirits == 10), True)
        self.assertEqual((Calc.KitchenEquipment == 10), True)
        self.assertEqual((Calc.BuildingRepair == 10), True)
        self.assertEqual((Calc.CleaningProducts == 10), True)
        self.assertEqual((Calc.ITMarketing == 10), True)
        self.assertEqual((Calc.MainsWater == 10), True)
        self.assertEqual((Calc.Sewage == 10), True)

    #Tests if a validation error is raised if the user has typed in letters instead of integers for the Fuel field.
    def test_fuel_integers_only(self):
        Calc = Calculator(MainsGas=10, Fuel='ten', Oil=10, Coal=10, Wood=10, GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10, BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        self.assertRaises(ValidationError, Calc.full_clean)

