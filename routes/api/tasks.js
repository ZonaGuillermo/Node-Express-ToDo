import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	const tasks = await new Promise((resolve, reject) => {
		db.query('select * from task', (err, result) => {
			if (err) return reject(err);
			return resolve(result);
		});
	});

	res.status(200).json(tasks);
});


router.get('/:id', async (req, res) => {
	try {
		const prom = await new Promise((resolve, reject) => {
			db.query('select * from task where id=?',
				[req.params.id],
				(err, result) => {
					if (err) return reject(err);
					if (result.length === 0) return resolve({ msj: 'No existe la tarea'})
					resolve(result);
			})
		})

		res.json(prom);
	} catch (err) {
		console.log('Estoy en el catch');
		res.json(err);
	}
})


router.post('/', async (req, res) => {
	const prom = await new Promise((resolve, reject) => {
		db.query('insert into task (task, done) values (?,?)',
			[req.body.task, req.body.done],
			(err, result) => {
				if (err) return reject(err);
				return resolve(result);
			}
		)
	});

	res.json(prom);
});


router.put('/:id', async (req, res) => {
	const prom = await new Promise((resolve, reject) => {
		db.query('update task set task=?, done=? where id=?',
			[req.body.task, req.body.done, req.params.id],
			(err, result) => {
				if (err) return reject(err);
				return resolve(result);
			}
		);
	});

	res.json(prom);
});


router.delete('/:id', async (req, res) => {
	const prom = await new Promise((resolve, reject) => {
		db.query('delete from task where id=?',
			[req.params.id],
			(err, result) => {
				if (err) return reject(err);
				resolve(result);
		})
	})

	res.json(prom);
})


export default router;