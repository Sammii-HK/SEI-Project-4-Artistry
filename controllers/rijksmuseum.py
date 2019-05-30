import os
import requests
from flask import Blueprint, Response


router = Blueprint('rijks', __name__)

@router.route('/rijksmuseum/collection')
def collection():
    api_key = os.getenv('RIJKS_API_KEY')
    url = 'https://www.rijksmuseum.nl/api/en/collection'
    params = {
        'key': api_key,
        'ps': '48'
        }
    req = requests.get(url, params=params)

    return Response(
        mimetype='application/json',
        response=req.text
    )

@router.route('/rijksmuseum/collection/<object_number>')
def item(object_number):
    api_key = os.getenv('RIJKS_API_KEY')
    url = f'https://www.rijksmuseum.nl/api/en/collection/{object_number}'
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
