import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import orgMockData from './mockData/organization.mock';
import * as authError from '../server/constants/auth.constants';

const { validOrgToken, invalidOrgToken } = orgMockData;
chai.use(chaiHttp);

describe('Organization Register Tests', () => {
  it('should return a 200 status on successful registration', async () => {
    const { body, status } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgData);
    expect(status).to.eql(201);
    expect(body).to.haveOwnProperty('token');
  });

  it('should return an error when token is invalid', async () => {
    const {
      body: { message },
      status,
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${invalidOrgToken}`)
      .send(orgMockData.orgData);
    expect(status).to.eql(400);
    expect(message).to.eql(authError.EXISTING_USER);
  });

  it('should return an error when organization name/email exists', async () => {
    const {
      body: { message },
      status,
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgData);
    expect(status).to.eql(400);
    expect(message).to.eql(authError.EXISTING_ORG);
  });

  it('should return an error if organization name is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgNameEmpty);
    expect(status).to.eql(400);
    expect(error.name).to.eql(authError.REQUIRED_ORG_NAME_ERROR);
  });

  it('should return an error if organization email is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgEmailEmpty);
    expect(status).to.eql(400);
    expect(error.email).to.eql(authError.REQUIRED_ORG_EMAIL_ERROR);
  });

  it('should return an error if organization email is invalid', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgEmailInvalid);
    expect(status).to.eql(400);
    expect(error.email).to.eql(authError.VALID_ORG_EMAIL_ERROR);
  });

  it('should return an error if organization logo URL is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgLogoEmpty);
    expect(status).to.eql(400);
    expect(error.logoURL).to.eql(authError.REQUIRED_ORG_LOGO_ERROR);
  });

  it('should return an error if organization date founded is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgFoundedInEmpty);
    expect(status).to.eql(400);
    expect(error.foundedIn).to.eql(authError.REQUIRED_ORG_FOUNDED_ERROR);
  });

  it('should return an error if organization date founded is invalid', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgFoundedInInvalid);
    expect(status).to.eql(400);
    expect(error.foundedIn).to.eql(authError.VALID_ORG_FOUNDED_ERROR);
  });

  it('should return an error if organization industry is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgIndustryEmpty);
    expect(status).to.eql(400);
    expect(error.industry).to.eql(authError.REQUIRED_ORG_INDUSTRY_ERROR);
  });

  it('should return an error if organization description is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgDescriptionEmpty);
    expect(status).to.eql(400);
    expect(error.description).to.eql(authError.REQUIRED_ORG_DESCRIPTION_ERROR);
  });

  it('should return an error if organization description is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgDescriptionEmpty);
    expect(status).to.eql(400);
    expect(error.description).to.eql(authError.REQUIRED_ORG_DESCRIPTION_ERROR);
  });

  it('should return an error if organization contact is empty', async () => {
    const {
      status,
      body: { error },
    } = await chai
      .request(server)
      .post('/api/auth/organization/register/')
      .set('Authorization', `Bearer ${validOrgToken}`)
      .send(orgMockData.orgContactPhoneEmpty);
    expect(status).to.eql(400);
    expect(error.contactPhone).to.eql(authError.REQUIRED_ORG_CONTACT_ERROR);
  });
});
