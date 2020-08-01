from rest_framework import serializers
from .models import Reward
from accounts.serializers import FacilitySerializer

# 시설의 리워드 생성
class RewardCreateSerializer(serializers.ModelSerializer):
    facility = FacilitySerializer(required=False)
    class Meta:
        model = Reward
        fields = '__all__'

# 리워드 조회
class RewardSerializer(serializers.ModelSerializer):
    facility = FacilitySerializer()
    class Meta:
        model = Reward
        fields = '__all__'