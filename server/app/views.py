from django.shortcuts import render
from django.template.context import RequestContext
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from models import WinRecord
# import json
# import jsonpickle


def home(request):
	# print "User Model : " + str(User.objects.all())
	# users = User.objects.all() 
	# for user in users:
	# 	print user.password
	# log_user = request.user
	# if not log_user.is_anonymous: 
	# 	print "Username: " + log_user.username
	# 	print "password: " + log_user.password
	# 	print "email: " + log_user.email
	# 	print "first_name: " + log_user.first_name
	# 	print "Last_name: " + log_user.last_name

	return render(request, 'home.html',
                 context = {'user': request.user,})

@login_required(login_url='/login/google-oauth2/')
def userInfo(request):
	Response_array = []
	winrecords = list(WinRecord.objects.all().filter(user = request.user))
	for winrecord in winrecords:
		Response = {}
		for name in dir(winrecord):
			if name is "time" or name is "level":
				value = getattr(winrecord, name)
				Response[name] = value
			elif name is "user":
				value = getattr(winrecord, name)
				Response[name] = str(value)
		Response_array.append(Response)

	print Response_array
	# def expected_data(obj):
	# 	obj_dict = {}
	# 	obj_dict['user'] = obj['_user_cache']
	# 	obj_dict['level'] = obj['level']
	# 	obj_dict['time'] = obj['time']
	# 	return obj_dict
	
	# def obj_dict(obj):
	# 	if hasattr(obj, '__dict__'):
	# 		print obj.__dict__
	# 		# return expected_data(obj.__dict__)
	# 		return obj.__dict__
		
	
	# json_string = ''
	# a = []
	# # for winrecord in winrecords:
	# 	# a.append(obj_dict(winrecord.)) 
	# 	# json_string +=json.dumps(winrecord, default=obj_dict)

	# 	# print json.dumps(vars(winrecord),sort_keys=True, indent=4)
	# print a
	return JsonResponse({'Response' : Response_array})