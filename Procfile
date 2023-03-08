web: gunicorn --chdir brewdog_project brewdog_project.wsgi
worker: cd brewdog_project && python manage.py makemigrations brewdog_api && python manage.py migrate brewdog_api && python manage.py makemigrations && python manage.py migrate && python manage.py runserver
worker: cd brewdog_project/frontend && npm run build