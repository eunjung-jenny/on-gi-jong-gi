from django.db import models
from rewards.models import Reward
from accounts.models import Firm

# Create your models here.

class Stuff(models.Model):
    rewards = models.ManyToManyField(
        Reward,
        related_name='rewards_stuff',
    )
    firm = models.ForeignKey(
        Firm,
        related_name='firms_stuff',
        on_delete=models.CASCADE
    )
    category = models.CharField(max_length=100)
    price = models.IntegerField()
    name = models.CharField(max_length=100)
    max_volume = models.IntegerField()
    field = models.FloatField()
    imgurl = models.URLField()
