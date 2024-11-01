from http.client import responses

import bcrypt
import random
from settings.constants import DB as db, SYMBOLS


class Hashing:
    # Hash password
    def __init__(self, password):
        self.password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    # password_1 == password_2 ?
    def __eq__(self, other):
        return bcrypt.checkpw(other.password, self.password)

    # Return password
    def get_pass(self):
        return self.password


class User:
    def __init__(self, username=None, password=None, email=None):
        # Initialization user
        self.err = None
        response_1 = db.get_data(table='users', username=username)
        response_2 = db.get_data(table='users', email=email)
        if (response_1['ok'] and response_2['ok']) and "keyWarn" not in response_1.keys():
            self.err = 1
        elif (response_1['ok'] and response_2['ok']) and "keyWarn" not in response_2.keys():
            self.err = 2
        elif (response_1['ok'] and response_2['ok']) and response_1['keyWarn'] == response_2['keyWarn'] == 1:
            self.token = self.generate_token()
            response = db.add_row(table='users', username=username, password=password, email=email, token=self.token)
            if not response['ok']:
                self.err = 3
            else:
                self.user_id = db.get_data(table='users', username=username)['data'][0][0]

    # Generate new token for user
    def generate_token(self):
        while True:
            token = ''.join(random.choices(SYMBOLS, k=256))
            if not db.get_data(table='users', token=token)['data']:
                return token

    # Auth user
    def auth(self):
        response = db.get_data(table='users', id=self.user_id)
        actual_token = response['data'][4]
        if actual_token:
            return actual_token
        new_token = self.generate_token()
        self.change_token(new_token)
        return new_token

    # Change user token
    def change_token(self, token):
        db.update_value(table='users', id=self.user_id, token=token)

    # Get user data
    def get_user(self):
        if not self.err:
            return {"ok": True, "data": {"token": self.token, "user_id": self.user_id}}
        elif self.err == 1:
            return {"ok": False, "keyError": self.err, "shortError": "User is exists"}
        elif self.err == 2:
            return {"ok": False, "keyError": self.err, "shortError": "Email is in using"}
        elif self.err == 3:
            return {"ok": False, "keyError": self.err, "shortError": "Something went wrong"}
