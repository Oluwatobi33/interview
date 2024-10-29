from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path("signup/", views.signup, name='signup'),
    path("register/", views.RegisterUser, name='register'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
    path("signin/", views.signin, name='signin'),
    path('login/', views.LoginUser, name='login'),
    
]