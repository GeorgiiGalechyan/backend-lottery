-- users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  login VARCHAR(30) UNIQUE, 
  passwordhash VARCHAR(30),
  salt VARCHAR(14),
  email VARCHAR(50) UNIQUE,

  
  
);



CREATE TABLE `users` (
	`u_id` serial NOT NULL,
	`u_create_date` timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`u_login` varchar(30) NOT NULL UNIQUE,
	`u_pass_argon_2_hash` varchar(30) NOT NULL UNIQUE,
	`u_salt` varchar(14) NOT NULL,
	`u_email` varchar(50) NOT NULL UNIQUE,
	`u_enable` BOOLEAN NOT NULL DEFAULT true,
	`u_last_change` timestamp with time zone NOT NULL,
	`u_age_of_change` interval(day),
  'u_role' ______, -- связь с 1 из табл. roles
  'u_person' _______, -- связь с 1 из табл. persons
	PRIMARY KEY (`u_id`),
);
