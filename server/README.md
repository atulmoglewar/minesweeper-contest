Its a good practise to run server in virtual environment (pip install virtualenv).
Execute following commands in virtual environment:
1. clone the repo
2. Go to server repo : cd server/
3. pip install -r requirements.txt
4. python manage.py makemigrations
5. python manage.py migrate
6. python manage.py runserver