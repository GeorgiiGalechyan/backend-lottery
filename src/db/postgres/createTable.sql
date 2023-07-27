

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  login VARCHAR(30) UNIQUE, 
  password VARCHAR(30),
  email VARCHAR(50) UNIQUE
);


CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role VARCHAR(30)
)

-- Ищет таблицу по указанным парамертам и возвращает true/false -->
SELECT EXISTS (SELECT * FROM pg_tables WHERE tablename = 'users' AND tableowner = 'nrdfntug' );

SELECT EXISTS (SELECT * FROM pg_tables WHERE tableowner = 'nrdfntug' );

-- Показывает структуру талицы -->
SELECT column_name, column_default, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'users';
