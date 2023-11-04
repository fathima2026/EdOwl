from django.urls import path
from . import views
urlpatterns = [


    path('module/', views.ModuleList.as_view()),
    path('module/<int:pk>/', views.ModuleDetail.as_view()),

    path('teacher-module/<int:teacher_id>/', views.TeacherModuleList.as_view()),
   
   #course detail teacher
    path('teacher-module-detail/<int:pk>', views.TeacherModuleDetail.as_view()),

    path('topic/', views.TopicList.as_view()),
    
    path('topic/<int:pk>/', views.TopicDetailView.as_view()),

    path('module-topic/<int:module_id>/', views.ModuleTopicList.as_view()),

   


   #fetching course according to the code
   path('enroll/<str:module_code>/',views.Enrollment.as_view()),

   #enrolling into the course
    path('enrolled-module/', views.EnrollModule.as_view()),
 
    
    #fetch weather student enrolled into course already
    path('fetch-enroll-status/<int:student_id>/<int:course_id>',views.fetch_enroll_status),

    #fetch students courses
    path('student-module/<int:student_id>/', views.EnrolledModuleList.as_view()),

   #FETCH ENROLLED STUDENTS OF A SPECIFIC COURSE

     path('fetch-enroll-students/<int:course_id>',views.EnrolledStudentList.as_view()),

   #post new assignment    
     path('assignment/', views.AssignmentList.as_view()),

     path('assignment/<int:pk>/', views.AssignmentDetail.as_view()),
]
