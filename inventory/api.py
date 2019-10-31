from inventory.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer

# Inventory Viewset
class InventoryViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]
  serializer_class = InventorySerializer
  queryset = Inventory.objects.all()