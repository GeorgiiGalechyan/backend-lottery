-- Связи делятся на:
-- 1. Многие ко многим.
-- 2. Один ко многим.
--   - с обязательной связью;
--   - с необязательной связью;
-- 3. Один к одному.
--   - с обязательной связью;
--   - с необязательной связью;








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
  status 
  date 
  game ______ -- ссылка на игру из табл. games
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
