from django.core.mail import send_mail

RECEIVER_MAIL = "odiaseefosa18@gmail.com" #"agunwike@gmail.com"


def mailNwike(message, sender_email, f_name, l_name):
    formatted_message = f"This Mail Is From \n First Name : {f_name}\n Last Name : {l_name} \n MESSAGE : \n\n {message}"
    print(formatted_message)

    send_mail(
        "Mail From Your Website.",
        formatted_message,
        sender_email,
        [RECEIVER_MAIL],
        fail_silently=False
    )