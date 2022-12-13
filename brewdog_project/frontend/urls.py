from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('carboncalculator', index),
    path('howitworks', index),
    path('blog', index),
    path('login', index),
]