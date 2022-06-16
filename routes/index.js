import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.send(`Estas en la ruta de inicio: ${req.originalUrl}`);
});

export default router;