from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index),
    path('carboncalculator', index),
    path('howitworks', index),
    path('blog', index),
    path('login', index),
    path('myresults', index, name='myresults'),
    path('myresults/<int:id>', index),
    path('myaccount', index),
    path('signup', index),
]