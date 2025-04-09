import json
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from registration.models import Registration
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def serialize_user(user):
    return {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'date_of_birth': str(user.date_of_birth),
        'phone': user.phone,
        'age': user.age
    }

@csrf_exempt
def registration_list(request):
    if request.method == 'GET':
        users = Registration.objects.all()
        return JsonResponse([serialize_user(u) for u in users], safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        user = Registration.objects.create(
            name=data['name'],
            email=data['email'],
            date_of_birth=data['date_of_birth'],
            phone=data.get('phone'),
            age=data.get('age')
        )
        return JsonResponse(serialize_user(user))
    return HttpResponseNotAllowed(['GET', 'POST'])

@csrf_exempt
def registration_detail(request, id):
    try:
        user = Registration.objects.get(pk=id)
    except Registration.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)

    if request.method == 'GET':
        return JsonResponse(serialize_user(user))
    elif request.method == 'PUT':
        data = json.loads(request.body)
        user.name = data['name']
        user.email = data['email']
        user.date_of_birth = data['date_of_birth']
        user.phone = data.get('phone')
        user.age = data.get('age')
        user.save()
        return JsonResponse(serialize_user(user))
    elif request.method == 'DELETE':
        user.delete()
        return JsonResponse({'message': 'User deleted'})
    return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
