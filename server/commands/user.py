import commands
import security


def authorizate_user(username, password):
    hashed_password = commands.database.get_user_password(username=username)

    if hashed_password is None:
        print(f"[ERROR]: User '{username}' doesn't exist.")
        return False

    status = security.hashing.verify_password(
        password=password, hashed_password=hashed_password
    )
    return status
