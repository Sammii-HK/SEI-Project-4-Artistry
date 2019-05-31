import os
from flask import Blueprint, request, jsonify, g, Response
from models.Favorite import Favorite, FavoriteSchema
from app import db
import requests
from pony.orm import db_session
from marshmallow import ValidationError
from lib.secure_route import secure_route

router = Blueprint('favorites', __name__)

@router.route('/favorites', methods=['GET'])
@db_session
@secure_route
def favorites():
    schema = FavoriteSchema(many=True)

    return schema.dumps(favorites), 200


# MAKE A CREATE AND DELETE ROUTE FOR SAVED FAVS

@router.route('/favorites', methods=['POST'])
@db_session
@secure_route
def create():
    schema = FavoriteSchema()

    try:
        data = schema.load(request.get_json())
        favorite = Favorite(**data, user=g.current_user)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(favorite)

# @router.route('/favorites/<object_number>', methods=['POST'])
# def item(object_number):
#     api_key = os.getenv('RIJKS_API_KEY')
#     url = f'https://www.rijksmuseum.nl/api/en/collection/{object_number}'
#     params = {
#         'key': api_key
#         }
#     req = requests.get(url, params=params)
#
#     print(req.text)
#
#     return Response(
#         mimetype='application/json',
#         response=req.text,
#         status=req.status_code
#     )

    # DATA NEEDED FOR FAV MODEL

    # title = $.artObject.title
    # image = $.artObject.webImage.url
    # object_number = $.artObject.objectNumber


# @router.route('/favorites/<int:favorite_id>', methods=['DELETE'])
# @db_session
# def delete(favorite_id):
#     favorite = Favorite.get(id=favorite_id)
#
#     if not favorite:
#         abort(404)
#
#     favorite.delete()
#     db.commit()
#
#     return '', 204
