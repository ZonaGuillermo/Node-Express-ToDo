const executeQuery = (sql, values = []) => {
	return new Promise((resolve, reject) => {
		db.query(sql, values, (err, result) => {
			if (err) return reject(err);
			return resolve(result);
		});
	});
}

const executeQueryOne = (sql, values = []) => {
	return new Promise((resolve, reject) => {
		db.query(sql, values, (err, result) => {
			if (err) return reject(err);
			if (result.length === 0) return resolve({ msj: 'No existe la tarea' });
			return resolve(result[0]);
		})
	})
}


export { executeQuery, executeQueryOne }