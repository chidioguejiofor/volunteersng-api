import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import userMockData from './mockData/user.mock';
import db from '../database/models';
import * as authError from '../server/constants/auth.constants';
const {user1, user2} = userMockData;
const {User} = db;
chai.use(chaiHttp);

describe('User Register Tests', () => {
    it('should return a 201 status on successful registration', async () => {
      const { body, status } = await chai
        .request(server)
        .post('/api/auth/user/register/')
        .send(user1);
      expect(body.message).to.eql(authError.USER_REGISTRATION_MESSAGE)
      expect(body.success).to.eql(true);
      expect(status).to.eql(201);
      expect(body).to.haveOwnProperty('token');
     
    });
    it('should return an error when email exists', async () => {
        await User.create(user2);
      const {
        body,
        status
      } = await chai
        .request(server)
        .post('/api/auth/user/register/')
        .send(user2);
      expect(status).to.eql(400);
      expect(body.success).to.eql(false);
      expect(body.message).to.eql(authError.USER_EXISTS);
    });
  });
  