import { body } from 'express-validator';
import { isValid, parseISO, isFuture } from 'date-fns';
import * as authError from '../constants/auth.constants'

export const registerUserSchema = [
  body('email')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_EMAIL_ERROR)
    .isEmail()
    .withMessage(authError.VALID_EMAIL_ERROR),
  body('password')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_PASSWORD_ERROR)
    .isLength({ min: 6, max: 32 })
    .withMessage(authError.VALID_PASSWORD_ERROR),
  body('username')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_USERNAME_ERROR),
  body('name')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_NAME_ERROR),
];

export const registerOrganizationSchema = [
  body('name')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_NAME_ERROR),
  body('email')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_EMAIL_ERROR)
    .isEmail()
    .withMessage(authError.VALID_ORG_EMAIL_ERROR),
  body('logoURL')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_LOGO_ERROR),

  body('foundedIn')
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_FOUNDED_ERROR)
    .custom(value => isValid(parseISO(value)) && !isFuture(parseISO(value)))
    .withMessage(authError.VALID_ORG_FOUNDED_ERROR),
  body('industry')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_INDUSTRY_ERROR),
  body('description')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_DESCRIPTION_ERROR),
  body('contactPhone')
    .trim()
    .exists({ checkFalsy: true })
    .withMessage(authError.REQUIRED_ORG_CONTACT_ERROR),
];
