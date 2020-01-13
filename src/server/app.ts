import express, { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import router from './routes';
import root from '../../root';

const app = express();

Sentry.init({
  dsn: process.env.SENTY_DSN,
  integrations: [
    new RewriteFrames({
      root,
    }),
  ],
});

app.use(Sentry.Handlers.requestHandler());

app.use('/api', router);
app.get('/', (req: Request, resp: Response) => {
  return resp.status(200).json({
    message: 'Welcome All!',
  });
});

app.all('*', (req: Request, resp: Response) => {
  return resp.status(404).send('Unknown Route');
});

app.use(Sentry.Handlers.errorHandler());

export default app;
