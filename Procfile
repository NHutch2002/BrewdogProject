web: gunicorn --chdir brewdog_project brewdog_project.wsgi
worker: cd brewdog_project
worker: python manage.py runserver
worker: cd frontend
worker: npm run build