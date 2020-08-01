from django.db import models
from django.contrib.auth.models import AbstractUser


class Facility(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    description = models.TextField()
    address1 = models.CharField(max_length=20)
    address2 = models.CharField(max_length=20)
    address3 = models.CharField(max_length=30)
    facility_type = models.CharField(max_length=20)
    homepage = models.URLField()
    email = models.EmailField()
    imgurl = models.URLField()
    created_at = models.DateTimeField(null=True)

class User(AbstractUser):
    email = models.EmailField()
    nickname = models.CharField(max_length=20)
    follows = models.ManyToManyField(
        Facility,
        related_name='followings',
    )

class Firm(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=100)


