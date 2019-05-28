from flask import Flask
from pony.orm import Database, db_session

app = Flask(__name__)
db = Database()

db.bind(provider='postgres', database='artistry-db')
from models.User import User, UserSchema

db.generate_mapping(create_tables=True)

@app.route('/', methods=['GET'])
@db_session
def home():
    schema = UserSchema(many=True)
    users = User.select()
    print(users)
    return schema.dumps(users)
