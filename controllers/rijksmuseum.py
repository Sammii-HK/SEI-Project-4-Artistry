import os
import requests
from flask import Blueprint, Response, request
from pony.orm import db_session
from lib.secure_route import secure_route


router = Blueprint('rijks', __name__)

# this url returns a working search query in insomnia
# https://www.rijksmuseum.nl/api/en/collection/?q=still%20life&key={{ api_key  }}&format=json

@router.route('/rijksmuseum/collection')
@db_session
@secure_route
def search():
    query = request.args.get('query')
    api_key = os.getenv('RIJKS_API_KEY')
    url = 'https://www.rijksmuseum.nl/api/en/collection'
    params = {
        'q': query,
        'ps': '48',
        'key': api_key
    }
    req = requests.get(url, params=params)

    print('url', url)

    return Response(
        mimetype='application/json',
        response=req.text,
        status=req.status_code
    )


@router.route('/rijksmuseum/collection/<objectNumber>', methods=['GET'])
@db_session
@secure_route
def item(objectNumber):
    api_key = os.getenv('RIJKS_API_KEY')
    url = f'https://www.rijksmuseum.nl/api/en/collection/{objectNumber}'
    params = {
        'key': api_key
        }
    req = requests.get(url, params=params)

    print(req.status_code)

    return Response(
        mimetype='application/json',
        response=req.text,
        status=req.status_code
    )
