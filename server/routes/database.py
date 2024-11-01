from flask import Blueprint, jsonify, request
from settings.constants import API_URL, DB as db

MAIN_URL = f'{API_URL}/database'

bp = Blueprint('database_route', __name__)


@bp.route(f'{MAIN_URL}/get_data', methods=['GET'])
# Get data from database route
def get_data():
    params = request.args.to_dict()
    table_name = params.get('table')
    del params['table']
    if not table_name:
        return jsonify({"ok": False,
                        "stack": "Table name as 'table' parameter is required",
                        "shortError": "'table' is empty"}), 400
    response = db.get_data(table=table_name, **params)
    if response['ok']:
        if table_name == 'news':
            return {
                "ok": True,
                "data": [{"title": item[1], "text": item[2], "id": item[0]} for item in response['data']],
                "sysMsg": response['sysMsg']
            }, 200
        elif table_name == 'faq':
            return {
                "ok": True,
                "data": [{"question": item[1], "ans": item[2], "id": item[0]} for item in response['data']],
                "sysMsg": response["sysMsg"]
            }, 200
        return response, 400
