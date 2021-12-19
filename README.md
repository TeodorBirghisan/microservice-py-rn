Setup

Run docker-compose up in admin directory and main directory

in admin backend docker container run:
    python manage.py makemigrations
    python manage.py migrate

in main backend docker container run:
    python manager.py db init
    python manager.py db upgrade
    python manager.py db migrate

in react-native-app directory

npm install
npm start
