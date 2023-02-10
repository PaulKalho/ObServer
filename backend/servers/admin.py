from django.contrib import admin

from .models import Server

# Register your models here.
class CustomServers(admin.ModelAdmin):
    model = Server
    list_display = ('id', 'serverName', 'ipAdress', 'option')

admin.site.register(Server, CustomServers)
