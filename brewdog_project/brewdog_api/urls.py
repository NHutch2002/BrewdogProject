from django.urls import path
from .views import UserView, CalculatorView, LoginView, CustomAuthToken
from rest_framework.authtoken import views
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('login/', LoginView.as_view()),
    path('api-token-auth/', CustomAuthToken.as_view())
]