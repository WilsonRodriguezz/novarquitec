import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Home' }));

router.get('/portafolio', (req, res) =>
  res.render('portafolio', { title: 'Portafolio' })
);

export default router;
