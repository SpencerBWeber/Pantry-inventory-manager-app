from django.db import models
from django.core.validators import MinValueValidator 

class Inventory(models.Model):
  name = models.CharField(max_length=100)
  count = models.IntegerField(default=0, validators=[MinValueValidator(0)])
  created_at = models.DateTimeField(auto_now_add=True)