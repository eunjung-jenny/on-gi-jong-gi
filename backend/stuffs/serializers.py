from rest_framework import serializers
from rewards.serializers import RewardSerializer
from accounts.serializers import FirmSerializer
from .models import Stuff

# stuff 생성하기
class StuffCreateSerializer(serializers.ModelSerializer):
    firm = FirmSerializer(required=False)
    class Meta:
        model = Stuff
        fields = ['firm', 'category', 'price', 'name', 'max_volume', 'field', 'imgurl']

# stuff 조회
class StuffSerializer(serializers.ModelSerializer):
    rewards = RewardSerializer(many=True)
    firm = FirmSerializer()
    class Meta:
        model = Stuff
        fields = '__all__'