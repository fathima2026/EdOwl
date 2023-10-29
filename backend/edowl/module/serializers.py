from rest_framework import serializers
from . import models

class ModuleSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Module
        fields = ['id','title', 'description', 'teacher','code']

class TopicSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Topic
        fields = ['id','title', 'module']

class EnrolledModuleSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.StudentCourseEnrollment
        fields = ['id','course','student','enrolled_time']