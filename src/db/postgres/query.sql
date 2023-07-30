-- Ищет таблицу по указанным парамертам и возвращает true/false -->
SELECT EXISTS (SELECT * FROM pg_tables WHERE tablename = 'users' AND tableowner = 'nrdfntug' );

SELECT EXISTS (SELECT * FROM pg_tables WHERE tableowner = 'nrdfntug' );

-- Показывает структуру талицы -->
SELECT column_name, column_default, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'users';


-- Показывает содержимое таблицы
/*


*/