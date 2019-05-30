from flask import Blueprint
from models.Favorite import FavoriteSchema
# from app import db
from pony.orm import db_session
# from marshmallow import ValidationError
from lib.secure_route import secure_route

router = Blueprint('auth', __name__)

@router.route('/favorites', methods=['POST'])
@db_session
@secure_route
def favorites():
    schema = FavoriteSchema(many=True)

    return schema.dumps(favorites), 200
