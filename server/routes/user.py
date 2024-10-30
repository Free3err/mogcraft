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
    token = User(None).generate_token()
    response = db.add_row(table="users", username=username, password=password, email=email, token=token)
    if response['ok']:
        return {"ok": True, "token": token}, 200
    else:
        return response, 409
