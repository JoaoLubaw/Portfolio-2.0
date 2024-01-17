from django.urls import path
from .views import ProjectListCreateView, ProjectRetrieveUpdateDestroyView
from .views import home

urlpatterns = [
    path('', home, name='home'),

    path('api/project/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('api/project/<int:pk>/', ProjectRetrieveUpdateDestroyView.as_view(), name='project-retrieve-update-destroy')

]
