from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import TeacherSerializer, StudentSerializer
from django.http import JsonResponse
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt

from . import models

# Create your views here.
class TeacherList(generics.ListCreateAPIView):
   queryset = models.Teacher.objects.all()
   serializer_class = TeacherSerializer
   # permission_classes = [permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Teacher.objects.all()
   serializer_class = TeacherSerializer

class StudentList(generics.ListCreateAPIView):
   queryset = models.Student.objects.all()
   serializer_class = StudentSerializer
   # permission_classes = [permissions.IsAuthenticated]

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Student.objects.all()
   serializer_class = StudentSerializer

@csrf_exempt
def student_login(request):
   email = request.POST['email']
   password = request.POST['password']
   try:
      studentData = models.Student.objects.get(email=email, password=password)
   except models.Student.DoesNotExist:
      studentData=None
   if studentData:
      return JsonResponse({'bool':True,'is_student':studentData.is_student,'is_teacher':studentData.is_teacher,'is_staff':studentData.is_staff, 'id':studentData.id})
   else:
      return JsonResponse({'bool':False})
   
@csrf_exempt
def teacher_login(request):
   email = request.POST['email']
   password = request.POST['password']
   try:
      teacherData = models.Teacher.objects.get(email=email, password=password)
   except models.Teacher.DoesNotExist:
      teacherData=None
   if teacherData:
      return JsonResponse({'bool':True,'is_student':teacherData.is_student,'is_teacher':teacherData.is_teacher,'is_staff':teacherData.is_staff, 'id':teacherData.id})
   else:
      return JsonResponse({'bool':False})
   

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
   serializer_class = TokenObtainPairSerializer

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
