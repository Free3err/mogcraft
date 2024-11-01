from flask import Blueprint, jsonify, request
from settings.constants import API_URL, DB as db

from system.modules.security import Hashing, User

MAIN_URL = f'{API_URL}/user'

bp = Blueprint("user_route", __name__)


@bp.route(f'{MAIN_URL}/sign_up', methods=['POST'])
# Function to sign up user
async def sign_up():
    request_body = request.get_json()
    username = request_body['username']
    password = Hashing(request_body['password']).get_pass()
    email = request_body['email']
    response = User(username, password, email).get_user()
    return response, 200
