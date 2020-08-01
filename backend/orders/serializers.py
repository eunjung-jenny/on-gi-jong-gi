from rest_framework import serializers
from accounts.serializers import UserSerializer
from rewards.serializers import RewardSerializer

class OrderCreateSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    reward = RewardSerializer(required=False)