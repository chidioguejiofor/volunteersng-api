import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import validator from '../middlewares/validator';
import { registerOrganizationSchema, registerUserSchema } from '../validations/auth.schema';
import TokenHelper from '../helpers/token.helper';

const authRouter: Router = Router();

authRouter.post(
  '/organization/register',
  TokenHelper.verifyToken,
  validator(registerOrganizationSchema),
  AuthController.registerOrganization,
);
authRouter.post('/user/register', validator(registerUserSchema), AuthController.registerUser);
export default authRouter;
