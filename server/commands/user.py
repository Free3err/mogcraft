import commands
import security


def authorizate_user(username: str, password: str) -> bool:
    hashed_password = commands.database.get_user_password(username=username)

    if hashed_password is None:
        print(f"[ERROR]: hashed_password is None object.")
        return False

    status = security.hashing.verify_password(
        password=password, hashed_password=hashed_password
    )
    return status


def registrate_user(role: int, username: str, password: str) -> bool:
    is_exist = commands.database.is_exist_user(username=username)

    if is_exist:
        return False

    hashed_password = security.hashing.password(password)
    commands.database.create_user(username=username, password=hashed_password, role=role)
    
    return True