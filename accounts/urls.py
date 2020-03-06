from django.urls import path

from . import views

# set the app name
app_name = "accounts"

# declare the urlpatterns for the website

urlpatterns = [
    path('register/', views.register_user, name="register_user"),
    path('login/', views.login_user, name="login_user"),
    path('logout/', views.logout_user, name="logout_user"),
    path("profile/", views.profile, name="profile")

]