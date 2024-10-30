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
    def __init__(self, username):
        # Initialization user
        response = db.get_data(table='users', username=username)
        if response['ok'] and len(response['data']):
            self.user_id = response['data'][0]

    # Generate new token for user
    def generate_token(self):
        while True:
            token = ''.join(random.choices(SYMBOLS, k=64))
            if not db.get_data(table='users', token=token)['data']:
                return token

    # Auth user
    def auth(self):
        response = db.get_data(table='users', id=self.user_id)
        actual_token = response['data'][4]
        if actual_token:
            return actual_token
        new_token = self.generate_token()
        return new_token

    # Change user token
    def change_token(self):
        # db.change_value(table='users', id=self.user_id)
        pass
