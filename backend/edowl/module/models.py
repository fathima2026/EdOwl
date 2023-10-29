from django.db import models
from users.models import Teacher, Student

# Create your models here.

#returns all modules

class Module(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    code = models.CharField(max_length=255)
    
    def __str__(self):
        return self.title

class Topic(models.Model):
    title = models.CharField(max_length=255)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    
class StudentCourseEnrollment(models.Model):
    course = models.ForeignKey(Module, on_delete=models.CASCADE,related_name='enrolled_courses')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolled_students')
    enrolled_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "6. Enrolled courses"