from django.urls import path
from . import views
urlpatterns = [


    path('module/', views.ModuleList.as_view()),
    path('module/<int:pk>/', views.ModuleDetail.as_view()),

    path('teacher-module/<int:teacher_id>/', views.TeacherModuleList.as_view()),
   
   #course detail
    path('teacher-module-detail/<int:pk>', views.TeacherModuleDetail.as_view()),

    path('topic/', views.TopicList.as_view()),
    
    path('topic/<int:pk>/', views.TopicDetailView.as_view()),

    path('module-topic/<int:module_id>/', views.ModuleTopicList.as_view()),
   

]
