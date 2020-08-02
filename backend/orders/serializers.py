from rest_framework import serializers
from accounts.serializers import UserSerializer
from rewards.serializers import RewardSerializer
from cards.serializers import CardSerialiser
from .models import Order

class OrderCreateSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    reward = RewardSerializer(required=False)
    card = CardSerialiser(required=False)
    class Meta:
        model = Order
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    reward = RewardSerializer()
    card = CardSerialiser()
    class Meta:
        model = Order
        fields = '__all__'