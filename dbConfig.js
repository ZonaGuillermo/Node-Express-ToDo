import mysql from 'mysql2';

const pool = mysql.createPool({
	host: process.env.HOST,
	port: process.env.DB_PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DB_NAME
});

global.db = pool;