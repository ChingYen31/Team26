from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', views.static_home, name='home'),
    path('register/', views.register_view, name='register'),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('send/', views.send_message, name='send_message'),
    path('delete/<int:message_id>/', views.delete_message, name='delete_message'),
]
