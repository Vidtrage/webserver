from django.http import HttpResponse
from django.shortcuts import render


def login(request):
    return render(request, 'webui/login.html')


def tap(request):
    return render(request, 'TAP.html')