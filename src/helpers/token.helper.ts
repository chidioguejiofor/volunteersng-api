import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import {NO_TOKEN, INVALID_TOKEN} from '../constants/auth.constants'
dotenv.config();

const envSecret: string = process.env.JWT_SECRET;
export default class TokenHelper {
  static generateToken(payload: {}, secret: string = envSecret, expires: string = '24h') {
    const token = jwt.sign(payload, secret, { expiresIn: expires });
    return token;
  }

  static verifyToken(req, resp, next) {
    const token = req.get('Authorization')?.split(' ')[1];
    if (!token) {
      return resp.status(401).send({
        success: false,
        message: NO_TOKEN,
      });
    }
    try {
      const payload = jwt.verify(token, envSecret);

      req.payload = payload;
      return next();
    } catch (error) {
      return resp.status(401).send({
        success: false,
        message: INVALID_TOKEN,
      });
    }
  }
}