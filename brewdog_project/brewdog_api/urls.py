from django.urls import path
from .views import UserView, CalculatorView
 
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
]