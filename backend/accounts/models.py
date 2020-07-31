from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Facility(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    address1 = models.CharField(max_length=20)
    address2 = models.CharField(max_length=20)
    address3 = models.CharField(max_length=30)
    type = models.CharField(max_length=20)
    homepage = models.URLField()
    email = models.EmailField()
    imgurl = models.URLField()

class User(AbstractUser):
    email = models.EmailField()
    nickname = models.CharField(max_length=20)
    followers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='followings',
    )
    follow_facilities = models.ManyToManyField(
        Facility,
        related_name='following_users',
    )

class Firm(models.Model):
    name = models.CharField(max_length=100)


