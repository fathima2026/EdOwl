from rest_framework import serializers
from . import models
from users.models import Student
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

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Assignment
        fields = ['id','title','description','file','image','total_mark','module','created_time']




