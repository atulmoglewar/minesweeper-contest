from django.db import models
from django.contrib.auth.models import User

class WinRecord(models.Model):
	id = models.AutoField(primary_key=True)
	user = models.ForeignKey(User, help_text= "User to whom record is belogs", null=True, on_delete=models.CASCADE)
	time = models.FloatField(help_text="Time taken to sweep all mines")
	level = models.CharField(max_length= 20, help_text="Level could be either Advanced or Nightmare")