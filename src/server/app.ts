import express, { Request, Response } from 'express';
import router from './routes';

const app = express();


app.use('/api', router);
app.get('/', (req: Request, resp: Response) => {
    return resp.status(200).json({
        message: 'Welcome All!'
    });
});

app.all('*', (req: Request, resp: Response) => {
    return resp.status(404).send('Unknown Route');
});


export default app


