from django.urls import path
from registration import views
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({"message": "Welcome to the Registration API!"})


urlpatterns = [
    path('',api_root),
    path('registrations/', views.registration_list, name='registration_list'),
    path('registrations/<int:id>/', views.registration_detail, name='registration_detail'),
]
