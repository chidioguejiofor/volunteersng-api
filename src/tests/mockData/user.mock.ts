
interface User {
  name: string;
  email: string;
  username: string;
  password: string;
}

export const user1: User = {
  name: 'Runo Jaeger',
  email: 'runo@gmail.com',
  username: 'runo',
  password: 'password'
};
export const user2: User = {
  name: 'Tega Jaeger',
  email: 'tega1@gmail.com',
  username: 'tega',
  password: 'password'
};


export default {
  user1,
  user2
};
