import { body } from 'express-validator';
import { isValid, parseISO, isFuture } from 'date-fns';

export const registerUserSchema = [
  body('email')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email'),
  body('password')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Password is required')
    .isLength({ min: 6, max: 32 })
    .withMessage('Password should be between 6 and 32 characters'),
  body('username')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Username is required'),
  body('name')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Full name is required'),
];

export const registerOrganizationSchema = [
  ...registerUserSchema,
  body('orgName')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Organization name is required'),
  body('orgEmail')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Organization email is required')
    .isEmail()
    .withMessage('Enter a valid email'),
  body('logoURL')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Logo URL is required'),

  body('foundedIn')
    .exists({ checkFalsy: true })
    .withMessage('Date founded is required')
    .custom(value => isValid(parseISO(value)) && !isFuture(parseISO(value)))
    .withMessage('Enter a valid date'),
  body('industry')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Industry is required'),
  body('description')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Description is required'),
  body('contactPhone')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('Contact is required'),
];
