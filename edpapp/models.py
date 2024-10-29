from django.db import models
from django.contrib.auth.models import User

class Candidate(models.Model):
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)  # Use OneToOneField instead of ForeignKey
    email = models.EmailField(unique=True)  # This might be redundant if using User's email
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    phoneno = models.CharField(max_length=15)
    gender = models.CharField(max_length=15, choices=[
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ])
    dob = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"  # Return full name for better representation

