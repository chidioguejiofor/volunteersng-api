import HashHelper from '../../server/helpers/hash.helper';
interface Org {
  name: string;
  email: string;
  username: string;
  password: string;
  orgName: string;
  orgEmail: string;
  logoURL: string;
  foundedIn: string;
  industry: string;
  description: string;
  contactPhone: string;
}

export const org1: Org = {
  name: 'Eren Jaeger',
  email: 'eren@gmail.com',
  username: 'eren',
  password: 'password',
  orgName: 'NewAge',
  orgEmail: 'eren@new-age.com',
  logoURL: 'http://some-url',
  foundedIn: '2019-09-09',
  industry: 'Electronics',
  description: 'Some description',
  contactPhone: '08103456789',
};
export const org2: Org = {
  name: 'Eren Jaeger',
  email: 'eren1@gmail.com',
  username: 'eren',
  password: 'password',
  orgName: 'NewAge',
  orgEmail: 'eren@new-age.com',
  logoURL: 'http://some-url',
  foundedIn: '2019-09-09',
  industry: 'Electronics',
  description: 'Some description',
  contactPhone: '08103456789',
};
