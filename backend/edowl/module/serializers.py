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
        fields = ['id','course','student','enrolled_time','enrolled_date']

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Assignment
        fields = ['id','title','description','file','image','total_mark','module','created_time','created_date']

class AssignmentSubmissionSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.AssignmentSubmission
        fields = ['id','assignment','student','file','completed_time','completed_date','marks','remarks']

class AssignmentAccessSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.AssignmentSubmission
        fields = ['id','assignment','student','file','completed_time','completed_date','marks','remarks']
        depth=1

class QuizSerializer(serializers.ModelSerializer):
    class Meta :
        model = models.Quiz
        fields = ['id','title','quiz','module','total_mark','created_time','created_date','due_date','duration','file']



