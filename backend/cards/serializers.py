from rest_framework import serializers
from .models import Card
from accounts.serializers import UserSerializer

class CardCreateSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    class Meta:
        model = Card
        fields = '__all__'

class CardSerialiser(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta(CardCreateSerializer.Meta):
        fields = ['user', 'company', 'number']

