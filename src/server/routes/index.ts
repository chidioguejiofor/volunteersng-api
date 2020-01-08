import { Router } from 'express';
import SampleController from '../controllers/sample';
const router = Router();

router.get('', (req, resp) => {
    return resp.status(200).send('From router');
});

router.get('/test-sample', SampleController.testSampleRoute);

export default router;
