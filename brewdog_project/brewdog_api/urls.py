from django.urls import path
from .views import UserView, CalculatorView, LoginView, CustomAuthToken, CalculatorConstantsView, IndividualCalculatorView, RetrieveIndividualUserView
from rest_framework.authtoken import views
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('individualuser/', RetrieveIndividualUserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('login/', LoginView.as_view()),
    path('calculatorconstants/', CalculatorConstantsView.as_view()),
    path('api-token-auth/', CustomAuthToken.as_view()),
    path('individualcalculator/', IndividualCalculatorView.as_view())
]

