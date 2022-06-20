import express from 'express';
import * as taskModel from '../../models/task.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const tasks = await taskModel.getAll();
		res.status(200).json(tasks);
	} catch (err) {
		res.json({ error: err.message });
	}
});


router.get('/:id', async (req, res) => {
	try {
		const prom = await taskModel.getById(req.params.id);
		res.json(prom);
	} catch (err) {
		res.json({ error: err.message });
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