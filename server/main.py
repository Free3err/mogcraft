from flask import Flask, request, jsonify
from flask_cors import CORS

import commands

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api/parse_owner/get_name', methods=['POST'])
def get_owner_name():
    data = request.json
    url = data.get('url')

    owner_name = commands.parse_owner.get_name(url)
    return jsonify({'owner_name': owner_name}), 200


@app.route('/api/parse_group/get_name', methods=['POST'])
def get_name_group():
    data = request.json
    url = data.get('url')

    group_name = commands.parse_group.get_name(url)
    return jsonify({'group_name': group_name}), 200


@app.route('/api/parse_group/get_posts', methods=['POST'])
def get_posts_group():
    posts_array = commands.parse_group.get_posts()
    data = {"status": "ok", "data": posts_array}
    return jsonify(data), 200


@app.route('/api/pages/get_data', methods=['POST'])
def get_page_data():
    data = request.json
    path = data.get('path')

    if path:
        data = commands.pages.get_data(path)

        return jsonify({'status': 'ok', "text": data}), 200
    
    return jsonify({'status': 'error'}), 400


if __name__ == '__main__':
    app.run(debug=True)