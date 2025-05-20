from django.shortcuts import render
from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def about(request, author_no=0):
    html = "<h2>Here is No:{}'s about page!</h2><hr>".format(author_no)
    return HttpResponse(html)

def company(request):
    html = "<h2>Here is the company page!</h2><hr>"
    return HttpResponse(html)

def sales(request):
    html = "<h2>Here is the sales page!</h2><hr>"
    return HttpResponse(html)

