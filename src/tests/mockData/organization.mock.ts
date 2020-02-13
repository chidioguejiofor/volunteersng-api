import TokenHelper from '../../server/helpers/token.helper';
interface Org {
  name: string;
  email: string;
  logoURL: string;
  foundedIn: string;
  industry: string;
  description: string;
  contactPhone: string;
}

const orgData: Org = {
  name: 'NewAge',
  email: 'eren@new-age.com',
  logoURL: 'http://some-url',
  foundedIn: '2019-09-09',
  industry: 'Electronics',
  description: 'Some description',
  contactPhone: '08103456789',
};

const { name, ...orgNameEmpty } = orgData;
const { email, ...orgEmailEmpty } = orgData;
const { logoURL, ...orgLogoEmpty } = orgData;
const { foundedIn, ...orgFoundedInEmpty } = orgData;
const { industry, ...orgIndustryEmpty } = orgData;
const { description, ...orgDescriptionEmpty } = orgData;
const { contactPhone, ...orgContactPhoneEmpty } = orgData;

const orgEmailInvalid = { ...orgData, email: 'invalid' };
const orgFoundedInInvalid = { ...orgData, foundedIn: 'invalid' };

const validOrgToken: string = TokenHelper.generateToken({ id: 'cb1c0b31-72d3-4c51-94d0-901bc2dfb613' });
const invalidOrgToken: string = TokenHelper.generateToken({ id: '3142cd72-f683-429b-b2d0-acb8306ca9ab' });

export default {
  orgData,
  orgNameEmpty,
  orgEmailEmpty,
  orgLogoEmpty,
  orgFoundedInEmpty,
  orgIndustryEmpty,
  orgDescriptionEmpty,
  orgContactPhoneEmpty,
  orgEmailInvalid,
  orgFoundedInInvalid,
  validOrgToken,
  invalidOrgToken,
};
