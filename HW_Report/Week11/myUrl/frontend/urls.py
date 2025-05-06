from django.urls import path
from . import views

urlpatterns = [
    path('', views.static_home, name='home'),
    path('room/<str:room_name>/', views.room_view, name='room_view'),
    path('<str:room_name>/', views.room_view, name='room'),
    path('<str:room_name>/send/', views.send_message, name='send_message'),
]