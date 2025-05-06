from django.shortcuts import render, redirect
from .models import Room, Message
from django.views.decorators.csrf import csrf_exempt

def static_home(request):
    return render(request, 'index.html')

def room_view(request, room_name):
    room, created = Room.objects.get_or_create(name=room_name)
    messages = Message.objects.filter(room=room).order_by('timestamp')
    return render(request, 'index.html', {'room': room, 'messages': messages})

@csrf_exempt
def send_message(request, room_name):
    if request.method == 'POST':
        room = Room.objects.get(name=room_name)
        user = request.POST['user']
        content = request.POST['content']
        Message.objects.create(room=room, user=user, content=content)
    return redirect('room', room_name=room_name)
