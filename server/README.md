Its a good practise to run server in virtual environment (pip install virtualenv).

Please visit following link to know, how to use virtual environment:
  http://python-guide-pt-br.readthedocs.io/en/latest/dev/virtualenvs

Execute following commands in virtual environment:
1. clone the repo
2. Go to server repo : cd server/
3. pip install -r requirements.txt
4. python manage.py makemigrations
5. python manage.py migrate
6. python manage.py runserver