import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const envSecret: string = process.env.JWT_SECRET;

export default class TokenHelper {
  static generateToken(payload: {}, secret: string = envSecret, expires: string = '24h') {
    const token = jwt.sign(payload, secret, { expiresIn: expires });
    return token;
  }
}
