from django.db import models

class Server(models.Model):
    serverName = models.CharField(max_length=255, blank=False,null=False)
    ipAdress = models.GenericIPAddressField()
    option = models.CharField(max_length=255, blank=False,null=False)
