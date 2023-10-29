from django.shortcuts import render
from rest_framework import generics
from .serializers import ModuleSerializer,TopicSerializer, EnrolledModuleSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from . import models
# Create your views here.

# Create your views here.
class ModuleList(generics.ListCreateAPIView):
   queryset = models.Module.objects.all()
   serializer_class = ModuleSerializer
   # permission_classes = [permissions.IsAuthenticated]

class ModuleDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Module.objects.all()
   serializer_class = ModuleSerializer

class TopicList(generics.ListCreateAPIView):
   queryset = models.Topic.objects.all()
   serializer_class =TopicSerializer
   # permission_classes = [permissions.IsAuthenticated]

class TopicDetailView(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Topic.objects.all()
   serializer_class = TopicSerializer
#returns specific module for each teacher

class TeacherModuleList(generics.ListCreateAPIView):
   serializer_class = ModuleSerializer

   def get_queryset(self):
      teacher_id=self.kwargs['teacher_id']
      teacher = models.Teacher.objects.get(pk=teacher_id)
      return models.Module.objects.filter(teacher=teacher)

class TeacherModuleDetail(generics.RetrieveUpdateDestroyAPIView):
      queryset = models.Module.objects.all()
      serializer_class = ModuleSerializer

class ModuleTopicList(generics.ListAPIView):
   serializer_class = TopicSerializer

   def get_queryset(self):
      module_id=self.kwargs['module_id']
      module = models.Module.objects.get(pk=module_id)
      return models.Topic.objects.filter(module=module)

class Enrollment(generics.ListAPIView):
   serializer_class = ModuleSerializer

   def get_queryset(self):
      module_code = self.kwargs['module_code']
      # module = models.Module.objects.get(pk=module)
      return models.Module.objects.filter(code=module_code)

class EnrolledModuleList(generics.ListCreateAPIView):
   queryset = models.StudentCourseEnrollment.objects.all()
   serializer_class = EnrolledModuleSerializer
   # permission_classes = [permissions.IsAuthenticated]

class EnrolledModuleDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.StudentCourseEnrollment.objects.all()
   serializer_class = EnrolledModuleSerializer

def fetch_enroll_status(request,student_id,course_id):
   student = models.Student.objects.get(id=student_id)
   course = models.Module.objects.get(id=course_id)
   enrollStatus = models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
   if enrollStatus == 0:
      return JsonResponse({'bool':False})
   else:
      return JsonResponse({'bool':True})