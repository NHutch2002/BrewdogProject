from django.urls import path
from .views import UserView, CalculatorView, LoginView
 
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('login/', LoginView.as_view()),
]