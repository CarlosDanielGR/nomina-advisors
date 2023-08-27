import { CreateUser } from './register.interface';

export interface Login extends Pick<CreateUser, 'email' | 'password'> {}
