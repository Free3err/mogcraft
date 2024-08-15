from flask import Flask, request, jsonify
from flask_cors import CORS

import commands

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api/owner/get_name', methods=['GET'])
def get_owner_name():
    url = request.args.get('url')

    owner_name = commands.owner.get_name(url)
    return jsonify({'owner_name': owner_name}), 200


@app.route('/api/group/get_name', methods=['GET'])
def get_name_group():
    url = request.args.get('url')

    group_name = commands.group.get_name(url)
    return jsonify({'group_name': group_name}), 200


@app.route('/api/group/get_posts', methods=['GET'])
def get_posts_group():
    posts_array = commands.group.get_posts()
    data = {"status": "ok", "data": posts_array}
    return jsonify(data), 200


@app.route('/api/pages/get_data', methods=['GET'])
def get_page_data():
    path = request.args.get('path')

    data = commands.pages.get_data(path)
    return jsonify({'status': 'ok', 'text': data}), 200


if __name__ == '__main__':
    app.run(debug=True)