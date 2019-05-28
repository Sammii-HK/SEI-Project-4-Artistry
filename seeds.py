from pony.orm import db_session
from app import db
from models.User import User, UserSchema

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    schema = UserSchema()

    User(
        username="sammii",
        email="sam@email.com",
        password_hash=schema.generate_hash('pass')
    )

    db.commit()
