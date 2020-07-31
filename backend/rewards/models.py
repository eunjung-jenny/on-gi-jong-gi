from django.db import models
from accounts.models import Firm


class Reward(models.Model):
    title = models.CharField(max_length=100)
    max_vol = models.IntegerField()
    net_price = models.IntegerField()
    expire_date = models.DateTimeField()
    success = models.BooleanField(null=True)

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