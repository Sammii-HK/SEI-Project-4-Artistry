from pony.orm import Required
from marshmallow import Schema, fields, validates_schema, ValidationError

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
    title = fields.Str(required=True)
    image = fields.Str(required=True)
    object_number = fields.Str(required=True)

    @validates_schema
    def validate_object_number(self, data):
        favorite = Favorite.get(object_number=data.get('object_number'))

        if favorite:
            raise ValidationError(
                field_name='object_number',
                message=['Must be unique']
            )


    @validates_schema
    def validate_title(self, data):
        favorite = Favorite.get(title=data.get('title'))

        if favorite:
            raise ValidationError(
                field_name='title',
                message=['Must be unique']
            )
