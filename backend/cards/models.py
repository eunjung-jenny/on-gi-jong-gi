from django.db import models
from django.conf import settings
# Create your models here.

class Card(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='user_card',
        on_delete=models.CASCADE
    )
    company = models.CharField(max_length=10)
    expire_mon = models.IntegerField()
    expire_year = models.IntegerField()
    cvs = models.IntegerField() # hash required
    number = models.CharField(max_length=16) # hash required
    password = models.CharField(max_length=4) # hash required