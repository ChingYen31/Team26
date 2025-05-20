from django.shortcuts import render, redirect, get_object_or_404
from .models import Message
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

def static_home(request):
    messages = Message.objects.order_by('timestamp')
    return render(request, 'index.html', {'messages': messages})

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

@login_required
def send_message(request):
    if request.method == "POST":
        content = request.POST.get("content")
        if content:
            Message.objects.create(
                user=request.user,
                content=content
            )
    return redirect('home')

@login_required
def delete_message(request, message_id):
    message = get_object_or_404(Message, id=message_id, user=request.user)
    message.delete()
    return redirect('home')
