import os
import requests
from flask import Blueprint, Response, request


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

@router.route('/rijksmuseum/collection/<objectNumber>', methods=['GET'])
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

# this url returns a working search query in insomnia
# https://www.rijksmuseum.nl/api/en/collection/?q=still%20life&key={{ api_key  }}&format=json

@router.route('/rijksmuseum/collection')
def search():
    query = request.args.get('query')
    api_key = os.getenv('RIJKS_API_KEY')
    url = 'https://www.rijksmuseum.nl/api/en/collection'
    params = {
        'q': query,
        'key': api_key
    }
    req = requests.get(url, params=params)

    print('req.status_code', req.status_code)
    print('req.url', req.url)
    print('url', url)
    print('req', req)

    return Response(
        mimetype='application/json',
        response=req.text,
        status=req.status_code,
        url=req.url
    )
