from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
import commands


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "https://localhost:3000"}})


@app.route("/api/owner/get_name", methods=["GET"])
def get_owner_name():
    url = request.args.get("url")

    owner_name = commands.owner.get_name(url)
    return jsonify({"owner_name": owner_name}), 200


@app.route("/api/group/get_name", methods=["GET"])
def get_name_group():
    url = request.args.get("url")

    group_name = commands.group.get_name(url)
    return jsonify({"group_name": group_name}), 200


@app.route("/api/group/get_news", methods=["GET"])
def get_posts_group():
    posts_array = commands.group.get_posts()
    data = {"data": posts_array}
    return jsonify(data), 200


@app.route("/api/pages/get_data", methods=["GET"])
def get_page_data():
    path = request.args.get("path")

    data = commands.pages.get_data(path)
    return jsonify({"text": data}), 200


@app.route("/api/user/sign_in", methods=["POST"])
def sign_in():
    data = request.get_json()

    username = data["username"]
    password = data["password"]

    status = commands.user.authorizate_user(username, password)
    return jsonify({"is_authorized": status}), 200


@app.route("/api/user/sign_up", methods=["POST"])
def sign_up():
    data = request.get_json()
    
    username = data["username"]
    password = data["password"]
    
    status = commands.database.create_user(username=username, password=password)

app.run(debug=False)