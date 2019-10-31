from django.db import models
from django.core.validators import MinValueValidator 
from django.contrib.auth.models import User

class Inventory(models.Model):
  name = models.CharField(max_length=100)
  count = models.IntegerField(default=0, validators=[MinValueValidator(0)])
  owner = models.ForeignKey(User, related_name='inventory', on_delete=models.CASCADE, null=True)
  created_at = models.DateTimeField(auto_now_add=True)