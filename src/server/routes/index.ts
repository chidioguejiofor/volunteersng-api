import { Router } from 'express';
import authRouter from './auth.routes'
import SampleController from '../controllers/sample';
const router = Router();

router.get('', (req, resp) => {
    return resp.status(200).send('From router');
});

router.use('/auth', authRouter)

router.get('/test-sample', SampleController.testSampleRoute);

export default router;

