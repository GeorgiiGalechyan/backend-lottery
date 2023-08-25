-- persons
CREATE TABLE IF NOT EXISTS persons {
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30)
  last_name VARCHAR(30)
  middle_name VARCHAR(30)
  full_name VARCHAR(93)
  phone _______ --???
  primary_email _______ -- равно полю email из таблицы user
  secondary_email VARCHAR(50) UNIQUE,
  user ______ -- связь с 1 из табл. user
  orders _______ -- связь с несколькими из табл. orders // Заказы
}








