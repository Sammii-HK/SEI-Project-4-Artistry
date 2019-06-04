from pony.orm import Required
from marshmallow import Schema, fields #, validates_schema, ValidationError

from app import db

class Favorite(db.Entity):
    title = Required(str)
    image = Required(str)
    objectNumber = Required(str)
    user = Required('User')


class FavoriteSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    image = fields.Str(required=True)
    objectNumber = fields.Str(required=True)

    # @validates_schema
    # def validate_objectNumber(self, data):
    #     favorite = Favorite.get(objectNumber=data.get('objectNumber'))
    #
    #     if favorite:
    #         raise ValidationError(
    #             field_name='objectNumber',
    #             message=['Must be unique']
    #         )
