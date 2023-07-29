-- users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  login VARCHAR(30) UNIQUE, 
  password VARCHAR(30),
  email VARCHAR(50) UNIQUE
  role ______ -- связь с 1 из табл. roles
  activity ______ -- связь с 1 из табл. activities
  person _______ -- связь с 1 из табл. persons
);

-- roles
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    role VARCHAR(30) 
    _______ -- связь со многими из табл. users
)

-- activities
CREATE TABLE IF NOT EXISTS activities {
  id SERIAL PRIMARY KEY,
  activity VARCHAR(11)
  _______ -- связь со многими из табл. users
}

-- persons
CREATE TABLE IF NOT EXISTS persons {
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30)
  last_name VARCHAR(30)
  middle_name VARCHAR(30)
  full_name VARCHAR(93)
  phone _______ --???
  user ______ -- связь с 1 из табл. user
  drawings _______ -- связь с несколькими из табл. drawings
  orders _______ -- связь с несколькими из табл. orders
}



-- basket
CREATE TABLE IF NOT EXISTS baskets {
  id SERIAL PRIMARY KEY,
  goods _______
  total_price ______ -- стоимость всей корзины
  

}

-- goods   // как связать в заказе товар и его кол-во
CREATE TABLE IF NOT EXISTS goods {
 -- ticket 
  
 -- total_price
}




-- order
CREATE TABLE IF NOT EXISTS orders {
  id SERIAL PRIMARY KEY,
  tickets ________ -- связь с несколькими из табл. orders
}





-- tickets
CREATE TABLE IF NOT EXISTS drawing {
  id SERIAL PRIMARY KEY,
  drawing _______ -- ссылка на 1 розыгрыш
  price ________ 
}

-- drawings
CREATE TABLE IF NOT EXISTS drawings {
  id SERIAL PRIMARY KEY,
  date 
  game ______ -- ссылка на игру из табл. games
  gamers _______ -- ссылка на множество игроков
  prize_pool ______- -- денежный призовой фонд
  result _______ -- ???

}

-- games
CREATE TABLE IF NOT EXISTS games {
  id SERIAL PRIMARY KEY,
  game  VARCHAR(11)
  rules VARCHAR() -- Какая длительность?
  drawings ________ --  выборка из таблицы drawings, где games = "___"
}

-- rating 
CREATE TABLE IF NOT EXISTS drawing {
  id SERIAL PRIMARY KEY,
  activity VARCHAR(11)
}

--------------------------------------------------------------------------------


-- Ищет таблицу по указанным парамертам и возвращает true/false -->
SELECT EXISTS (SELECT * FROM pg_tables WHERE tablename = 'users' AND tableowner = 'nrdfntug' );

SELECT EXISTS (SELECT * FROM pg_tables WHERE tableowner = 'nrdfntug' );

-- Показывает структуру талицы -->
SELECT column_name, column_default, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'users';


-- Показывает содержимое таблицы
