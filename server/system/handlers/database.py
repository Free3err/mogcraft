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
            print("\033[0;31m[ERROR]\033[0m: Error by request.")
            return {"ok": False, "stack": str(e), "shortError": "Invalid database request"}

    return wrapper


class Database:
    # Database initialization
    def __init__(self):
        self.connection = None
        self.connect()

        try:
            with self.connection.cursor() as cursor:
                with open(os.path.join(os.path.dirname(__file__), '../../db_init.sql'), 'r') as file:
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
    def get_data(self, table, which_id):
        with self.connection.cursor() as cursor:
            if which_id > 0:
                cursor.execute(f"SELECT * FROM {table} WHERE id = %s;", (which_id,))
                data = cursor.fetchone()
            else:
                cursor.execute(f"SELECT * FROM {table};")
                data = cursor.fetchall()
        if not data:
            return {"ok": True, "data": data, "sysMsg": "No data found"}
        return {"ok": True, "data": data, "sysMsg": "OK"}

    def close(self):
        if self.connection:
            self.connection.close()
            print("\033[0;34m[INFO]\033[0m: Connection to database closed.")
