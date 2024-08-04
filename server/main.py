from flask import Flask, request, jsonify
from flask_cors import CORS

import commands

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api/parse_owner/get_name', methods=['POST'])
def get_owner_name():
    data = request.json
    url = data.get('url')

    if url:
        owner_name = commands.parse_owner.get_name(url)
        return jsonify({'owner_name': owner_name}), 200
    return jsonify({'error': 'URL не указан.'}), 400

@app.route('/api/parse_group/get_name', methods=['POST'])
def get_name_group():
    data = request.json
    url = data.get('url')

    if url:
        group_name = commands.parse_group.get_name(url)
        return jsonify({'group_name': group_name}), 200
    
    return jsonify({'error': 'URL не указан'}), 400


@app.route('/api/parse_group/get_posts', methods=['POST'])
def get_posts_group():
    data = request.json
    url = data.get('url')

    if url:
        posts_array = commands.parse_group.get_posts(url)

        data = {"status": "ok", "data": posts_array}

        return jsonify(data), 200

    return jsonify({'error': 'URL не указан'}), 400

if __name__ == '__main__':
    app.run(debug=True)