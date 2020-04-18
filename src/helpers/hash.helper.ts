import bcrypt from 'bcryptjs';

/** Hash Class */
class HashHelper {
  static hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  static comparePassword(hashedPassword: string, password: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }
}

export default HashHelper;