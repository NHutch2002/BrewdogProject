"""Config for brewdog_api apps."""
from django.apps import AppConfig

class BrewdogApiConfig(AppConfig):
    """BrewdogApiConfig class.

    Creates a reference to the brewdog_api module that can be used in settings.py.
    """

    default_auto_field = "django.db.models.BigAutoField"
    name = "brewdog_api"
