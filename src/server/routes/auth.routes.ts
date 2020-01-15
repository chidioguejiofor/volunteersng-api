import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import validator from '../middlewares/validator';
import { registerOrganizationSchema } from '../validations/auth.schema';

const authRouter: Router = Router();

authRouter.post('/organization/register', validator(registerOrganizationSchema), AuthController.registerOrganization);

export default authRouter;
