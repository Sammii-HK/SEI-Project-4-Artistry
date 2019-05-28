import os

secret = os.getenv('SECTRET', 'a super sceret secret of course')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/sandwich-db')
