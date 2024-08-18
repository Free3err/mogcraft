import bcrypt


def password(password):
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    return hashed_password.decode("utf-8")


def verify_password(password, hashed_password):
    hashed_password = hashed_password.encode("utf-8")
    status = bcrypt.checkpw(password.encode("utf-8"), hashed_password)
    return status
