from django.test import TestCase
from django.db.utils import IntegrityError
from brewdog_api.models import User
from django.core.exceptions import ValidationError

# Create your tests here.

class UserTests(TestCase):

    # Tests if the default company name is used if the user has not added their company name.
    def test_default_company(self):
        User1 = User(name='John', email='abc@gmail.com', phone='111', password='f72Nei!cr?Di3d')
        User1.save()
        self.assertEqual((User1.company == "No company name added"), True)

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

#class CalculatorTests(TestCase):

    

