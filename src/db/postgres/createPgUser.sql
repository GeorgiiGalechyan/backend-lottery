/* Создаю Пользователя Postres */
/* CREATE USER <name> WITH option */
CREATE USER <name> WITH PASSWORD '<password>';


/* Задаём/Изменяем уже существующему пользователю привелегии */
/* ALTER USER <name> WITH option */
ALTER USER <user> WITH NOSUPERUSER CREATEDB NOCREATEROLE INHERIT LOGIN NOREPLICATION BYPASSRLS;