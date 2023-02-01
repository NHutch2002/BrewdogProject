from django.urls import path
from .views import UserView, CalculatorView, LoginView, CalculatorConstantsView
 
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('login/', LoginView.as_view()),
    path('calculatorconstants/', CalculatorConstantsView.as_view()),

]