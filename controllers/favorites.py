from flask import Blueprint, request, jsonify, g, abort
from models.Favorite import Favorite, FavoriteSchema
from app import db
from pony.orm import db_session
# from lib.secure_route import secure_route
from marshmallow import ValidationError

router = Blueprint('favorites', __name__)

@router.route('/favorites', methods=['GET'])
@db_session
def favorites():
    schema = FavoriteSchema(many=True)

    return schema.dumps(favorites), 200


@router.route('/favorites', methods=['POST'])
@db_session
def create():
    schema = FavoriteSchema()

    try:
        data = schema.load(request.get_json())
        favorite = Favorite(**data, user=g.current_user)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(favorite)


@router.route('/favorites/<objectNumber>', methods=['DELETE'])
@db_session
def delete(objectNumber):
    favorite = Favorite.get(objectNumber=objectNumber)

    if not favorite:
        abort(404)

    favorite.delete()
    db.commit()

    return '', 204
