from django.db import models

# Create your models here.

class std(models.Model):
    roll_no=models.IntegerField()
    name=models.TextField()
    email=models.EmailField()
    course=models.TextField()
