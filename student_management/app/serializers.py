from rest_framework import serializers
from . models import *

class std_serializer(serializers.ModelSerializer):
    class Meta:
        model=std
        fields='__all__'