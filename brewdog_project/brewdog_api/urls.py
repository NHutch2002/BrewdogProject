from django.urls import path
from .views import UserView, CalculatorView, SecondCalculatorView
 
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('secondcalculator/', SecondCalculatorView.as_view()),
]