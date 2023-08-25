-- user_roles
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  role varchar(10)
  user_id -- связь со многими из табл. users
);

--Возможные значения:
-- admin
-- developer
-- customer