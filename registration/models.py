from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField()
    phone = models.CharField(max_length=15, blank=True, null=True)  
    age = models.IntegerField(blank=True, null=True)                
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name

