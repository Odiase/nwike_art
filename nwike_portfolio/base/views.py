from django.shortcuts import render
from .send_mail import mailNwike

# Create your views here.
def index(request):
    return render(request, "index.html")


def contact(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        user_mail = request.POST['email']
        message = request.POST['message']

        mailNwike(message, user_mail, first_name, last_name)

    return render(request, "contact.html")