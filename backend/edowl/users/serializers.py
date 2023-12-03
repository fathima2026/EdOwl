from rest_framework import serializers

from .models import Teacher, Student

class TeacherSerializer(serializers.ModelSerializer):
    class Meta :
        model = Teacher
        fields = ['id','email', 'first_name', 'last_name','password']

class StudentSerializer(serializers.ModelSerializer):
    class Meta :
        model = Student
        fields = ['id','email', 'first_name', 'last_name','password']

