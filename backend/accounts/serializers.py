from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Facility, Firm
from rewards.serializers import RewardSerializer

user = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = "__all__"

# 시설 생성용
class FacilityCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = "__all__"

# 시설 조회용
class FacilitySerializer(serializers.ModelSerializer):
    followings = UserSerializer(many=True)
    facility_rewards = RewardSerializer(many=True)
    class Meta:
        model = Facility
        fields = ['name', 'facility_rewards', 'description', 'address1', 'address2', 'address3', 'facility_type', 'homepage', 'imgurl', 'created_at', 'followings']

# 기업 생성/조회 용
class FirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = "__all__"