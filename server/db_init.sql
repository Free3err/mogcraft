-- Создание таблицы news
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    text TEXT NOT NULL
);

-- Создание таблицы faq
CREATE TABLE faq (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
);

-- Создание таблицы users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL,
    password VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL UNIQUE
);
