import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import { org1, org2 } from './mockData/organization.mock';
import {user1, user2} from './mockData/user.mock';
chai.use(chaiHttp);

describe('User Register Test', () => {
  it('should return a 200 status on successful registration', async () => {
    const { body, status } = await chai
      .request(server)
      .post('/api/auth/user/register/')
      .send(user1);
    expect(status).to.eql(201);
    expect(body).to.haveOwnProperty('token');
  });

  it('should return an error when email exists', async () => {
    const {
      body: { message },
      status,
    } = await chai
      .request(server)
      .post('/api/auth/user/register/')
      .send(user2);
    expect(status).to.eql(400);
    expect(message).to.eql('Email already exists');
  });


})
describe('Organization Register Tests', () => {
  it('should return a 200 status on successful registration', async () => {
    const { body, status } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .send(org1);
    expect(status).to.eql(201);
    expect(body).to.haveOwnProperty('token');
  });

  it('should return an error when email exists', async () => {
    const {
      body: { message },
      status,
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .send(org1);
    expect(status).to.eql(400);
    expect(message).to.eql('Email already exists');
  });

  it('should return an error when organization name/email exists', async () => {
    const {
      body: { message },
      status,
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .send(org2);
    expect(status).to.eql(400);
    expect(message).to.eql('Organization exists');
  });
});
