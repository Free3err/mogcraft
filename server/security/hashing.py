import bcrypt


def password(password: str) -> str:
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    return hashed_password.decode("utf-8")


def verify_password(password: str, hashed_password: str) -> bool:
    hashed_password = hashed_password.encode("utf-8")
    status = bcrypt.checkpw(password.encode("utf-8"), hashed_password)
    return status
