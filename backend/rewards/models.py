from django.db import models
from accounts.models import Firm, Facility


class Reward(models.Model):
    facility = models.ForeignKey(
        Facility,
        related_name = 'facility_rewards',
        on_delete = models.CASCADE
    )
    title = models.CharField(max_length=100)
    max_vol = models.IntegerField()
    net_price = models.IntegerField()
    expire_date = models.DateTimeField()
    success = models.BooleanField(null=True)