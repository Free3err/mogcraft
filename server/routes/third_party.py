from flask import Blueprint, jsonify, request

from settings.constants import API_URL

MAIN_URL = f"{API_URL}/third-party"

bp = Blueprint("third-party_routes", __main__)

print(f"{MAIN_URL}/vk/get_data")
@bp.route(f"{MAIN_URL}/vk/get_data", methods=['GET'])
async def get_vk_data():
    response = request.get_json()
    print(response)
    return 'HELLo WORLD'
