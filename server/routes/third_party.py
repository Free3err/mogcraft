from flask import Blueprint, jsonify, request
from settings.constants import API_URL

from system.handlers import third_party

MAIN_URL = f"{API_URL}/third-party"

bp = Blueprint("third-party_routes", __name__)


@bp.route(f"{MAIN_URL}/socials/get_data", methods=['GET'])
async def get_data():
    params = request.args.to_dict()
    response = third_party.Socials().get_data(social=params.get("social"), channel_url=params.get("channel_url"),
                                                    owner_url=params.get("owner_url"))
    return response, 200
