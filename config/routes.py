import os
from flask import abort
from app import app
from controllers import auth, rijksmuseum, favorites

app.register_blueprint(auth.router, url_prefix='/api')
app.register_blueprint(rijksmuseum.router, url_prefix='/api')

@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'):
    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return abort(404)
