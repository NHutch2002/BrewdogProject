"""
WSGI config for brewdog_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from whitenoise import WhiteNoise


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "brewdog_project.settings")

application = WhiteNoise(application, root='staticfiles')

