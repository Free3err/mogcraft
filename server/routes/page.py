from flask import Blueprint, jsonify

bp = Blueprint('pages_route', __name__)

@bp.route('/api/', methods=['GET'])
async def get_users():
    return "hello world"