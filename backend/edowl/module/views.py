from django.shortcuts import render
from rest_framework import generics
from .serializers import ModuleSerializer,TopicSerializer, EnrolledModuleSerializer, AssignmentSerializer, AssignmentSubmissionSerializer,AssignmentAccessSerializer, QuizSerializer, QuizSubmissionSerializer,HangmanSerializer,HangmanSubmissionSerializer,HangmanAccessSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from . import models
from users.serializers import StudentSerializer
from users.models import Student, BaseUser, Teacher
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
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

class AssignmentList(generics.ListCreateAPIView):
   queryset = models.Assignment.objects.all()
   serializer_class = AssignmentSerializer
   # permission_classes = [permissions.IsAuthenticated]

class AssignmentDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Assignment.objects.all()
   serializer_class = AssignmentSerializer
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
   
class EnrollModule(generics.ListCreateAPIView):
   queryset = models.StudentCourseEnrollment.objects.all()
   serializer_class = EnrolledModuleSerializer
   # permission_classes = [permissions.IsAuthenticated]

class EnrolledModuleList(generics.ListCreateAPIView):
   serializer_class = ModuleSerializer

   def get_queryset(self):
      student_id=self.kwargs['student_id']
      student = models.Student.objects.get(pk=student_id)
      modules = models.StudentCourseEnrollment.objects.filter(student=student)
      modulesarray = [];
      for val in modules:
       tasks = models.Assignment.objects.filter(module=val.course).count() + models.Quiz.objects.filter(module=val.course).count() + models.Hangman.objects.filter(module=val.course).count()
       studenttasks = models.AssignmentSubmission.objects.filter(student=student).count()+models.QuizSubmission.objects.filter(student=student).count()+models.HangmanSubmission.objects.filter(student=student).count()
       if tasks==0:
          val.course.tasks=0
       else:
          val.course.tasks=studenttasks/tasks
       modulesarray.append(val.course)
      return modulesarray
   

class EnrolledModuleListTask(APIView):

   def get(self,request,student_id):
      student_id=student_id
      student = models.Student.objects.get(pk=student_id)
      modules = models.StudentCourseEnrollment.objects.filter(student=student)
      modulesarray = [];
      for val in modules:
       tasks = models.Assignment.objects.filter(module=val.course).count() + models.Quiz.objects.filter(module=val.course).count()
       val.course.title=tasks
       modulesarray.append(val.course)
      return modulesarray

class EnrolledStudentList(generics.ListAPIView):
   serializer_class = StudentSerializer
      
   def get_queryset(self):
      course_id = self.kwargs['course_id']
      course = models.Module.objects.get(id=course_id)
      data = models.StudentCourseEnrollment.objects.filter(course=course)
      studentsarray = []
      for val in data:
         studentsarray.append(val.student)
      return studentsarray

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

class ModuleAssignmentList(generics.ListAPIView):
   serializer_class = AssignmentSerializer

   def get_queryset(self):
      module_id=self.kwargs['module_id']
      module = models.Module.objects.get(pk=module_id)
      return models.Assignment.objects.filter(module=module)

def fetch_submission_status(request,student_id,assignment_id):
   student = models.Student.objects.get(id=student_id)
   assignment = models.Assignment.objects.get(id=assignment_id)
   submissionStatus = models.AssignmentSubmission.objects.filter(assignment=assignment,student=student).count()
   if submissionStatus == 0:
      return JsonResponse({'bool':False})
   else:
      return JsonResponse({'bool':True})


class AssignmentSubmissionList(generics.ListCreateAPIView):
   queryset = models.AssignmentSubmission.objects.all()
   serializer_class = AssignmentSubmissionSerializer

class SubmissionAssignment(generics.ListAPIView):
   serializer_class = AssignmentAccessSerializer

   def get_queryset(self):
      assignment_id=self.kwargs['assignment_id']
      assignment = models.Assignment.objects.get(pk=assignment_id)
      return models.AssignmentSubmission.objects.filter(assignment=assignment)
   
class SubmissionDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.AssignmentSubmission.objects.all()
   serializer_class = AssignmentSubmissionSerializer

class FetchSubmission(generics.ListAPIView):
   serializer_class = AssignmentAccessSerializer

   def get_queryset(self):
      student_id = self.kwargs['student_id']
      assignment_id=self.kwargs['assignment_id']
      student = models.Student.objects.get(pk=student_id)
      assignment = models.Assignment.objects.get(pk=assignment_id)
      return models.AssignmentSubmission.objects.filter(assignment=assignment,student=student)
   

class QuizList(generics.ListCreateAPIView):
   queryset = models.Quiz.objects.all()
   serializer_class = QuizSerializer

class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Quiz.objects.all()
   serializer_class = QuizSerializer

class ModuleQuizList(generics.ListAPIView):
   serializer_class = QuizSerializer

   def get_queryset(self):
      module_id=self.kwargs['module_id']
      module = models.Module.objects.get(pk=module_id)
      return models.Quiz.objects.filter(module=module)
   
class SubmissionQuiz(generics.ListAPIView):
   serializer_class = QuizSubmissionSerializer

   def get_queryset(self):
      quiz_id=self.kwargs['quiz_id']
      quiz = models.Quiz.objects.get(pk=quiz_id)
      return models.QuizSubmission.objects.filter(quiz=quiz)
   
class QuizSubmissionList(generics.ListCreateAPIView):
   queryset = models.QuizSubmission.objects.all()
   serializer_class = QuizSubmissionSerializer

def fetch_quiz_status(request,student_id,quiz_id):
   student = models.Student.objects.get(id=student_id)
   quiz = models.Quiz.objects.get(id=quiz_id)
   submissionStatus = models.QuizSubmission.objects.filter(quiz=quiz,student=student).count()
   if submissionStatus == 0:
      return JsonResponse({'bool':False})
   else:
      return JsonResponse({'bool':True})
   

class HangmanList(generics.ListCreateAPIView):
   queryset = models.Hangman.objects.all()
   serializer_class = HangmanSerializer

class HangmanDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = models.Hangman.objects.all()
   serializer_class = HangmanSerializer

class ModuleHangmanList(generics.ListAPIView):
   serializer_class = HangmanSerializer

   def get_queryset(self):
      module_id=self.kwargs['module_id']
      module = models.Module.objects.get(pk=module_id)
      return models.Hangman.objects.filter(module=module)
   
class HangmanSubmissionList(generics.ListCreateAPIView):
   queryset = models.HangmanSubmission.objects.all()
   serializer_class = HangmanSubmissionSerializer

def fetch_hangman_status(request,student_id,hangman_id):
   student = models.Student.objects.get(id=student_id)
   hangman = models.Hangman.objects.get(id=hangman_id)
   submissionStatus = models.HangmanSubmission.objects.filter(hangman=hangman,student=student).count()
   if submissionStatus == 0:
      return JsonResponse({'bool':False})
   else:
      return JsonResponse({'bool':True})
   

class SubmissionHangman(generics.ListAPIView):
   serializer_class = HangmanAccessSerializer

   def get_queryset(self):
      hangman_id=self.kwargs['hangman_id']
      hangman = models.Hangman.objects.get(pk=hangman_id)
      return models.HangmanSubmission.objects.filter(hangman=hangman)
   

class FetchSubmissionHangman(generics.ListAPIView):
   serializer_class = HangmanAccessSerializer

   def get_queryset(self):
      student_id = self.kwargs['student_id']
      hangman_id=self.kwargs['hangman_id']
      student = models.Student.objects.get(pk=student_id)
      hangman = models.Hangman.objects.get(pk=hangman_id)
      return models.HangmanSubmission.objects.filter(hangman=hangman)
   

# def FetchHangmanRank(request,hangman_id):
#    hangman = models.Hangman.objects.get(pk=hangman_id)
#    items = models.HangmanSubmission.objects.filter(hangman=hangman)
#    studentarray = []
#    for item in items :
#       studentarray.append(item.student)
#    return JsonResponse({'student': studentarray})
