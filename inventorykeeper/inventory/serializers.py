from rest_framework import serializers
from inventory.models import Inventory

# Inventory Serializer
class InventorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Inventory
    fields = "__all__"