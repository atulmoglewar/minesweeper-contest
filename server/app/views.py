from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from models import WinRecord
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.contrib.staticfiles.templatetags.staticfiles import static
from django.conf import settings

# Handles unkown paths and redirect it to the valid paths.
def redirectUnknownPaths(request, path):
	if 'res' in path or 'bundle' in path:
		# Composing path for static files.
		url = static(path)
		return HttpResponseRedirect(url)
	# If not static files then we serve index.html for all unkown URL	
	return render(request, 'index.html',
		context = {'user': request.user,})

# This view function redirects request for google authentication.
def googleLogin(request):
	google_login_URL = settings.GOOGLE_LOGIN_URL
	# Composing Google login url with redirect path which appears in
	# current request i.e /google-login?redirect=/path
	# Default redirect url is '/' home page 
	redirectPath = request.GET.get('redirect') if request.GET.get('redirect') else  '/'
	return redirect(google_login_URL + redirectPath)

def home(request):
	return render(request, 'index.html',
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
	return JsonResponse({'Response' : Response_array})
