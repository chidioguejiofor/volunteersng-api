import { Router } from 'express';
import authRouter from './auth.routes';
const router = Router();

router.get('', (req, resp) => {
  return resp.status(200).send('From router');
});

router.use('/auth', authRouter);

export default router;
