from django.shortcuts import render
from rest_framework import viewsets

# Models
from .models import Server
from .serializers import ServerSerializer

class ServerView(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer

    def get_queryset(self):
        return self.queryset.filter()

    def perform_create(self, serializer):
        serializer.save()
