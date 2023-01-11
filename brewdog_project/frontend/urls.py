from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('carboncalculator', index),
    path('howitworks', index),
    path('blog', index),
    path('login', index),
    path('pledges', index),
    path('actionplan', index),
    path('myresults', index),
    path('myaccount', index),
    path('signup', index),
]