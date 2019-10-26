from inventory.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer

# Inventory Viewset
class InventoryViewSet(viewsets.ModelViewSet):
  queryset = Inventory.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = InventorySerializer