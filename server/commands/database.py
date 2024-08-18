import psycopg2
from dotenv import load_dotenv
import os

import security


def get_db_data():
    dotenv_path = os.path.join(os.path.dirname(__file__), "..", ".env")
    load_dotenv(dotenv_path)

    db_host = os.getenv("db_host")
    db_port = os.getenv("db_port")
    username = os.getenv("db_username")
    db_name = os.getenv("db_name")
    db_password = os.getenv("db_password")

    return db_host, db_port, username, db_name, db_password


# connection
def connect(func):
    def wrapper(*args, **kwargs):
        db_args = get_db_data()
        try:
            connection = psycopg2.connect(
                host=db_args[0],
                port=db_args[1],
                database=db_args[3],
                user=db_args[2],
                password=db_args[4],
            )
            connection.autocommit = True

            print(f"[INFO]: Connection to database successfully.")
            func(connection, **kwargs)

        except Exception as e:
            print(f"[ERROR]: {e}")
        finally:
            connection.close()
            print(f"[INFO]: Connection to database was closed.")

    return wrapper


# create tables for db
@connect
def create_tables(connection):
    with connection.cursor() as cursor:
        cursor.execute(
            """
            CREATE TABLE users(
                id SERIAL,
                role INT NOT NULL,
                username VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                
                PRIMARY KEY(id)
            );
            
            CREATE TABLE news(
                id SERIAL,
                date DATE,
                author VARCHAR, 
                title VARCHAR,
                text TEXT,
                
                PRIMARY KEY(id)
                );"""
        )

        print("[INFO]: Tables for database successfully was created.")


# methods for db
@connect
def create_user(connection, role, username, password):
    with connection.cursor() as cursor:

        cursor.execute(
            """
            SELECT EXISTS (
                SELECT 1
                FROM users
                WHERE username = %s 
            );""",
            (username),
        )

        if cursor.fetchone():
            print('''[INFO]: User wasn't created by reason "User is exist"''')
            return False

        cursor.execute(
            "INSERT INTO users (role, username, password) VALUES (%s, %s, %s)",
            (role, username, password),
        )

        print("[INFO]: User successfully was created.")
        return True


@connect
def get_user_password(connection, username):
    with connection.cursor() as cursor:
        cursor.execute(
                """SELECT password FROM users WHERE username = %s;""", (username,)
        )

        hashing_password = cursor.fetchone()[0]
        return hashing_password
