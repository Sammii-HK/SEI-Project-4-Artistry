from flask import Blueprint, request, jsonify
from models.User import User
# from app import db
from pony.orm import db_session
# from marshmallow import ValidationError

router = Blueprint('gallery', __name__)


@router.route('/gallery', methods=['GET'])
@db_session
def gallery():

    data = request.get_json()

    user = User.get(username=data.get('username'))

    return jsonify({
        'message': f'{user}, welcome to the gallery'
    })

@router.route('/search', methods=['GET'])
@db_session
def searchIndex():

    data = request.get_json()

    return jsonify({
        'message': 'This is the gallery index'
    })
