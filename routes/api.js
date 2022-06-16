import express from 'express';

import tasksRouter from './api/tasks.js';

const router = express.Router();

router.use('/tasks', tasksRouter);

export default router;