from pony.orm import db_session, Required
from app import db
from models.User import User, UserSchema
from models.Favorite import Favorite#, FavoriteSchema

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    schema = UserSchema()

    sammii = User(
        username="sammii",
        email="sam@email.com",
        password_hash=schema.generate_hash('pass')
    )

    Favorite(
        title="Night's Watch",
        image=Required(str),
        object_number="SK-C-5",
        user=sammii
    )

    db.commit()
