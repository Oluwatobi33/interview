from django.shortcuts import render, HttpResponse, redirect, get_object_or_404
from . models import *
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.conf import settings
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth import authenticate, login, logout
from django.core.mail import EmailMessage, send_mail
# from . tokens import generate_token
from .models import *
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import check_password
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth import logout
from .models import Candidate  # Correct model name

def signup(request):
    return render(request, "signup.html")

def index(request):
    return render(request, "index.html")

def RegisterUser(request):
    if request.method == "POST":
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        phoneno = request.POST.get("phoneno")
        email = request.POST.get("email")
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        gender = request.POST.get('gender')
        dob = request.POST.get('dob')

        # Validate first and last names
        if not firstname or not lastname:
            messages.error(request, "First name and last name are required!")
            return redirect('signup')

        # Capitalize names
        firstname = firstname.strip().title()
        lastname = lastname.strip().title()

        # Validate email uniqueness
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email is already registered!")
            return redirect('signup')

        # Validate password match
        if password1 != password2:
            messages.error(request, "Passwords didn't match!")
            return redirect('signup')

        # Validate names are alphanumeric
        if not firstname.isalnum() or not lastname.isalnum():
            messages.error(request, "First and last names must be alphanumeric!")
            return redirect('signup')

        # Create the user
        myuser = User.objects.create_user(
            username=email.split('@')[0], 
            email=email, 
            password=password1
        )
        myuser.first_name = firstname
        myuser.last_name = lastname
        myuser.is_active = False  # User is inactive until email verification
        myuser.save()

        # Create the Candidate
        Candidate.objects.create(
            user_id=myuser,
            firstname=firstname,
            lastname=lastname,
            email=email,
            phoneno=phoneno,
            gender=gender,
            dob=dob
        )

        messages.success(request, "Your account has been created successfully! Please check your email to confirm your email address to activate your account.")

        # Send welcome email
        subject = "Welcome to Oluwatobi Django Login!"
        message = f"Hello {myuser.first_name}!\nWelcome to Oluwatobi!\nThank you for visiting our website. Please confirm your email address to activate your account.\n\nThank you!"
        from_email = settings.EMAIL_HOST_USER
        send_mail(subject, message, from_email, [myuser.email], fail_silently=False)  # Change to False to catch errors

        # Send email address confirmation email
        current_site = get_current_site(request)
        email_subject = "Confirm your Email @ Oluwatobi - Django Login!"
        message2 = render_to_string('user_interface/email_verify.html', {
            'name': myuser.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
            'token': default_token_generator.make_token(myuser),
        })
        email = EmailMessage(email_subject, message2, from_email, [myuser.email])
        email.send(fail_silently=False)  # Change to False to catch errors

        return redirect('signin')

    return render(request, 'signup.html')  # Ensure to return a template if GET request


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        myuser = None

    if myuser is not None and default_token_generator.check_token(myuser, token):
        myuser.is_active = True
        myuser.save()

        # Specify the backend to use
        myuser.backend = 'django.contrib.auth.backends.ModelBackend'  # Adjust if using a custom backend

        # Log the user in
        login(request, myuser)

        messages.success(request, "Your account has been activated!")
        return redirect('signin')
    else:
        messages.error(request, "Activation link is invalid or has expired.")
        return render(request, 'activation_failed.html')



def signin(request):
    return render(request, "signin.html")

def LoginUser(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password1")

        user = authenticate(request, email=email, password=password)

        if user is not None:
            if not user.is_active:
                messages.error(request, "Account is not active. Please verify your email.")
                return redirect("signin")

            # Log the user in
            login(request, user)

            # Set session attributes if needed
            request.session['id'] = user.id
            request.session['email'] = user.email  # Assuming the User model has an email attribute
            request.session['is_created'] = timezone.now().isoformat()
            request.session.set_expiry(2000)

            messages.success(request, "Logged in successfully.")
            return redirect("Home")  # Change to your desired redirect after login
        else:
            messages.error(request, "Invalid email or password!")
            return redirect("signin")

    return render(request, "signin.html")


