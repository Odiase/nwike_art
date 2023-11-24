from django.db import models

# Create your models here.

class ArtWorks(models.Model):
    art_name = models.CharField(max_length=50, help_text="Sir Nwiks, What Is The Art Name?", null=False)
    thought = models.CharField(max_length=50, null=False)
    story = models.TextField(null=False)
    date_uploaded = models.DateTimeField(auto_now=True)


class Bio(models.Model):
    biography = models.TextField()


class SelectedWorks(models.Model):
    pass


class Quote(models.Model):
    new_quote = models.CharField(max_length=100, null=False)