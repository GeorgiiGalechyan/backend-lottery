-- roles
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    hascard BOOLEAN,
    hascoin BOOLEAN,
    person _______ -- связь со многими из табл. users
)
