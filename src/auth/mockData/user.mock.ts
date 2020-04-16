import { UserRegisterDto } from "../dto/user-register.dto";

  export const user1: UserRegisterDto = {
    firstname: 'Runo',
    lastname: 'Saduwa',
    email: 'runo@gmail.com',
    username: 'runo',
    password: 'password',
    verified: false
  };
  export const user2: UserRegisterDto = {
    firstname: 'Tega',
    lastname: 'Saduwa',
    email: 'tega1@gmail.com',
    username: 'tega',
    password: 'password',
    verified: false
  };
  
  export default {
    user1,
    user2
  };