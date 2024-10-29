from flask import Flask
from flask_cors import CORS

from routes import page
from config import CLIENT_API


def setup_app():
    application = Flask(__name__)
    CORS(application, resources={r"/api/*": {"origins": CLIENT_API}})
    for blueprint in [page.bp]:
        application.register_blueprint(blueprint)
    return application


if __name__ == "__main__":
    app = setup_app()
    app.run(port=5000, debug=True)
