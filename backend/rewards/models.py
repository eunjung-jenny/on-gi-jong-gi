from django.db import models
from accounts.models import Facility
from django.core.validators import MinValueValidator

class Reward: 
    facility = models.ForeignKey(
        Facility,
        related_name="rewards",
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=100)
    max_vol = models.IntegerField(
        validators = [MinValueValidator(1)]
    )
    net_price = models.IntegerField(
        validators = [MinValueValidator(1)]   
    )
    expire_date = models.DateTimeField()
    success = models.BooleanField(null=True)