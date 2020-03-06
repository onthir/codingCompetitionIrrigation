from django.urls import path

from . import views

# set the app name
app_name = "main"

# declare the urlpatterns for the website

urlpatterns = [
    path('', views.home, name="home"),

]