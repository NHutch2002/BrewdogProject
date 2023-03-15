from rest_framework.permissions import BasePermission

class FrontendPermission(BasePermission):
    def has_permission(self, request, view):
        return request.META.get('HTTP_X_FRONTEND_REQUEST') == 'true'
