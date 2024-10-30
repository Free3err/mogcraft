import psycopg2
import os
from config import DB_HOST, DB_NAME, DB_USER, DB_USER_PASSWORD, DB_PORT


# Function for checking request by errors
def check_request(func):
    def wrapper(self, *args, **kwargs):
        try:
            return func(self, *args, **kwargs)
        except Exception as e:
            self.connection.rollback()
            print("\033[0;31m[ERROR]\033[0m: Invalid request.")
            print(e)
            return {"ok": False, "shortError": "Invalid database request"}

    return wrapper


class Database:
    # Database initialization
    def __init__(self):
        self.connection = None
        self.connect()

        try:
            with self.connection.cursor() as cursor:
                with open(os.path.join(os.path.dirname(__file__), '../../db_init.sql'), 'r', encoding="UTF-8") as file:
                    sql_script = file.read()
                    cursor.execute(sql_script)
            self.connection.commit()
            print("\033[0;34m[INFO]\033[0m: Database initialized.")
        except psycopg2.errors.DuplicateTable:
            self.connection.rollback()
            print("\033[0;34m[INFO]\033[0m: Database already exists. Initialization isn't required.")
        except Exception as e:
            self.connection.rollback()
            print("\033[0;31m[ERROR]\033[0m: ", e)

    # Connect to database
    def connect(self):
        try:
            self.connection = psycopg2.connect(dbname=DB_NAME,
                                               user=DB_USER,
                                               password=DB_USER_PASSWORD,
                                               host=DB_HOST,
                                               port=DB_PORT)
            print("\033[0;34m[INFO]\033[0m: Connection to database successfully.")
        except Exception as e:
            print("\033[0;31m[ERROR]\033[0m: Connection to database failed.")

    @check_request
    # Get data from database
    def get_data(self, table, **kwargs):
        with self.connection.cursor() as cursor:
            if kwargs:
                conditions = [f'{condition} = %s' for condition in kwargs.keys()]
                cursor.execute(f"SELECT * FROM {table} WHERE {' AND'.join(conditions)}", (tuple(kwargs.values()),))
            else:
                cursor.execute(f"SELECT * FROM {table};")
            data = cursor.fetchall()
        if not data:
            return {"ok": True, "data": data, "sysMsg": "No data found"}
        return {"ok": True, "data": [data[0]] if len(data) == 1 else data, "sysMsg": "OK"}

    @check_request
    # Add row to table
    def add_row(self, table, **kwargs):
        with self.connection.cursor() as cursor:
            try:
                cursor.execute(
                    f"INSERT INTO {table} ({", ".join(tuple(kwargs.keys()))}) VALUES ({', '.join(['%s'] * len(tuple(kwargs.values())))})",
                    tuple(kwargs.values()), )
                self.connection.commit()
            except psycopg2.errors.UniqueViolation as e:
                self.connection.rollback()
                return {"ok": False, "shortError": "Value/Values is exist", "keyError": 1}
        return {"ok": True}
