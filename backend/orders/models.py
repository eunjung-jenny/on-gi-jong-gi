from django.db import models
from django.conf import settings
from rewards.models import Reward
from cards.models import Card

class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="user_order",
        on_delete=models.CASCADE
    )
    reward = models.ForeignKey(
        Reward,
        related_name="reward_order",
        on_delete=models.CASCADE
    )
    card = models.ForeignKey(
        Card,
        related_name="card_order",
        on_delete=models.CASCADE
    )
    volume = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)