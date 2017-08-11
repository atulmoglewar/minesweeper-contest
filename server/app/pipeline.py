from models import UserProfile
from requests import request, HTTPError
from django.core.files.base import ContentFile
from urllib2 import urlopen, HTTPError
from django.template.defaultfilters import slugify

def get_avatar(backend, strategy, details, response,
        user=None, *args, **kwargs):
    try:
        url = None
        if backend.name == 'facebook':
            url = "http://graph.facebook.com/%s/picture?type=large"%response['id']
            # if you need a square picture from fb, this line help you
            url = "http://graph.facebook.com/%s/picture?width=150&height=150"%response['id']
        if backend.name == 'twitter':
            url = response.get('profile_image_url', '').replace('_normal','')
        if backend.name == 'google-oauth2':
            url = response['image'].get('url')
            ext = url.split('.')[-1]
        if url:
            # Get request to get profile pic through url 
            avatar = urlopen(url)
            # Creating or getting userprofile object for particular user
            profile, created = UserProfile.objects.get_or_create(user=user)
            # saving image file in imagefield of UserProfile object
            profile.profile_photo.save(slugify(user.username + " social") + '.jpg', 
                ContentFile(avatar.read()))
            profile.save()
    except HTTPError:
        pass
