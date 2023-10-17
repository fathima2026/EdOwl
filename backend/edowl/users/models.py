from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Teacher(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,default='')
    password = models.CharField(max_length=100)
   
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    
    def __str__(self):
        return self.email
    
class Student(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,default='')
    password = models.CharField(max_length=100)
   
    is_active = models.BooleanField(default=True)
    is_student = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    def __str__(self):
        return self.email
    
