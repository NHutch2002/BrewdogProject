"""Tests for the brewdog_api app

This module contains the tests for the brewdog_api app.
"""
from django.test import TestCase
from django.db.utils import IntegrityError
from django.core.exceptions import ValidationError
from django.core import serializers
from brewdog_api.models import BrewdogUser, Calculator, CalculatorConstants


class UserTests(TestCase):
    """Class for testing the BrewdogUser model."""

    def test_user_account_created(self):
        """Tests if a user's account is successfully created with the appropriate fields."""

        user1 = BrewdogUser(company='Brewdog', email='abc@gmail.com', phone='111')
        self.assertEqual((user1.company == 'Brewdog'), True)
        self.assertEqual((user1.email == 'abc@gmail.com'), True)
        self.assertEqual((user1.phone == '111'), True)


class CalculatorTests(TestCase):
    """Class for testing the Calculator model."""

    def test_calculator_values(self):
        """Tests if a calculator object is successfully created with the appropriate fields."""

        calc = Calculator(MainsGas=10, Fuel=10, Oil=10, Coal=10, Wood=10, GridElectricity=10,
                        Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10,
                        BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10,
                        SpecialWaste=10, CompanyGoodsDelivery=10, ContractedGoodsDelivery=10,
                        Travel=10, UKFlights=10, InternationalFlights=10, StaffCommute=10,
                        BeefLamb=10,OtherMeat=10, LobsterFarmedPrawn=10, Fish=10, MilkYogurt=10,
                        Cheese=10, LocalFruitVegetables=10, FreightFruitVegetables=10,
                        OtherDriedFood=10, BeerKegs=10, BeerCans=10, BeerBottles=10, LowBeerKegs=10,
                        LowBeerCans=10, LowBeerBottles=10, SoftDrinks=10, Wine=10, Spirits=10,
                        KitchenEquipment=10, BuildingRepair=10, CleaningProducts=10, ITMarketing=10,
                        MainsWater=10, Sewage=10)
        calc.save()
        self.assertEqual((calc.MainsGas == 10), True)
        self.assertEqual((calc.Fuel == 10), True)
        self.assertEqual((calc.Oil == 10), True)
        self.assertEqual((calc.Coal == 10), True)
        self.assertEqual((calc.Wood == 10), True)
        self.assertEqual((calc.GridElectricity == 10), True)
        self.assertEqual((calc.Electricity == 10), True)
        self.assertEqual((calc.WFLandfill == 10), True)
        self.assertEqual((calc.WFReuse == 10), True)
        self.assertEqual((calc.WFCharity == 10), True)
        self.assertEqual((calc.BottleRecycling == 10), True)
        self.assertEqual((calc.AluminiumRecycling == 10), True)
        self.assertEqual((calc.GWLandfill == 10), True)
        self.assertEqual((calc.GWRecycling == 10), True)
        self.assertEqual((calc.CompanyGoodsDelivery == 10), True)
        self.assertEqual((calc.ContractedGoodsDelivery == 10), True)
        self.assertEqual((calc.Travel == 10), True)
        self.assertEqual((calc.UKFlights == 10), True)
        self.assertEqual((calc.InternationalFlights == 10), True)
        self.assertEqual((calc.BeefLamb == 10), True)
        self.assertEqual((calc.OtherMeat == 10), True)
        self.assertEqual((calc.LobsterFarmedPrawn == 10), True)
        self.assertEqual((calc.Fish == 10), True)
        self.assertEqual((calc.MilkYogurt == 10), True)
        self.assertEqual((calc.Cheese == 10), True)
        self.assertEqual((calc.LocalFruitVegetables == 10), True)
        self.assertEqual((calc.FreightFruitVegetables == 10), True)
        self.assertEqual((calc.BeerKegs == 10), True)
        self.assertEqual((calc.BeerCans == 10), True)
        self.assertEqual((calc.BeerBottles == 10), True)
        self.assertEqual((calc.LowBeerKegs == 10), True)
        self.assertEqual((calc.LowBeerCans == 10), True)
        self.assertEqual((calc.LowBeerBottles == 10), True)
        self.assertEqual((calc.SoftDrinks == 10), True)
        self.assertEqual((calc.Wine == 10), True)
        self.assertEqual((calc.Spirits == 10), True)
        self.assertEqual((calc.KitchenEquipment == 10), True)
        self.assertEqual((calc.BuildingRepair == 10), True)
        self.assertEqual((calc.CleaningProducts == 10), True)
        self.assertEqual((calc.ITMarketing == 10), True)
        self.assertEqual((calc.MainsWater == 10), True)
        self.assertEqual((calc.Sewage == 10), True)

    def test_fuel_integers_only(self):
        """Tests if a validation error is raised if the user has
        typed in letters instead of integers for the Fuel field."""

        calc = Calculator(MainsGas=10, Fuel='ten', Oil=10, Coal=10, Wood=10, GridElectricity=10,
                          Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10,
                          BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10,
                          SpecialWaste=10)
        self.assertRaises(ValidationError, calc.full_clean)

    def test_fuel_positive_integers_only(self):
        """Tests if a validation error is raised if the user has
        typed in a negative value for the Fuel field."""

        calc = Calculator(MainsGas=10, Fuel=-10, Oil=10, Coal=10, Wood=10, GridElectricity=10,
                          Electricity=10, WFLandfill=10, WFReuse=10, WFCharity=10,
                          BottleRecycling=10, AluminiumRecycling=10, GWLandfill=10, GWRecycling=10,
                          SpecialWaste=10)
        self.assertRaises(ValidationError, calc.full_clean)


class CalculatorConstantsTests(TestCase):
    """Class for  testing the Calculator constants."""

    def test_fuel_positive_integers_only(self):
        """Tests if a validation error is raised if the user has
        typed in a negative value for the Fuel field."""

        calc = CalculatorConstants(MainsGas=10, Fuel=-10, Oil=10, Coal=10, Wood=10,
                                   GridElectricity=10, Electricity=10, WFLandfill=10, WFReuse=10,
                                   WFCharity=10, BottleRecycling=10, AluminiumRecycling=10,
                                   GWLandfill=10, GWRecycling=10, SpecialWaste=10)
        self.assertRaises(ValidationError, calc.full_clean)
