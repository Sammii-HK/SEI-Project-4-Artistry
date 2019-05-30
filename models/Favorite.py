
from pony.orm import Required
from marshmallow import Schema, fields

from app import db


# make POST request to make new fav with ob id and image
# create new fav model and add current user to fav

class Favorite(db.Entity):
    title = Required(str, unique=True)
    image = Required(str)
    object_number = Required(str)
    user = Required('User')


class FavoriteSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
