from inventory.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer

# Inventory Viewset
class InventoryViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]
  serializer_class = InventorySerializer

  def get_queryset(self):
    return self.request.user.inventory.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)