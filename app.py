from flask import Flask
from pony.orm import Database, db_session

app = Flask(__name__, static_folder='public')
db = Database()

db.bind('postgres', 'postgres://localhost:5432/artistry-db')

# pylint disable=W0611,C0413
from config import routes

db.generate_mapping(create_tables=True)

@app.route('/', methods=['GET'])
@db_session
def home():
    return 'Hello World!', 200
