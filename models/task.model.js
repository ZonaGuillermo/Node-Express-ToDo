import { executeQuery, executeQueryOne } from '../helpers.js'

const getAll = () => {
	return executeQuery('select * from task');
}

const getById = (id) => {
	return executeQueryOne('select * from task where id=?', [id]);
}

const create = ({ task, done }) => {}

const updateById = (id, { task, done }) => {}

const deleteById = (id) => {}

export { getAll, getById, create, updateById, deleteById }