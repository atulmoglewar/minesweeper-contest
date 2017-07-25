from __future__ import unicode_literals

from django.contrib import admin
from models import WinRecord

class WinRecordAdmin(admin.ModelAdmin):
	fields = ('user', 'time', 'level')

admin.site.register(WinRecord, WinRecordAdmin)