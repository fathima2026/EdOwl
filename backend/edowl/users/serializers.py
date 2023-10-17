from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Teacher
        fields = ['id','email', 'first_name', 'last_name','password']

class StudentSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Student
        fields = ['id','email', 'first_name', 'last_name','password']