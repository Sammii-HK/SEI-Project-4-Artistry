import os
# import codecs
# from app import db
import requests
from flask import Blueprint, Response


router = Blueprint('rijks', __name__)

@router.route('/rijksmuseum/collection')
def collection():
    api_key = os.getenv('RIJKS_API_KEY')
    url = 'https://www.rijksmuseum.nl/api/en/collection'
    params = {
        'key': api_key,
        'maker': 'Rembrant'
        }
    # make a request to the actual rijksmuseum API
    req = requests.get(url, params=params)

    return Response(
        mimetype='application/json',
        response=req.text
    )
