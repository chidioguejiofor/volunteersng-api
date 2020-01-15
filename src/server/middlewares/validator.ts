import { validationResult, matchedData } from 'express-validator';

/**
 * Schema validator
 * @param {Array} schemas
 * @param {number} status
 * @returns {Array} an array of validation schema and middleware
 */
export default schemas => {
  const validatorCheck = async (req, res, next) => {
    const errors = validationResult(req);
    req = { ...req, ...matchedData(req) };

    if (!errors.isEmpty()) {
      const mapErrors = Object.entries(errors.mapped()).reduce((accumulator, [key, value]) => {
        accumulator[key] = value.msg;
        return accumulator;
      }, {});

      const response = {
        message: 'Validation Error!',
        error: mapErrors,
      };

      return res.status(400).json(response);
    }

    return next();
  };
  return [...(schemas.length && [schemas]), validatorCheck];
};
