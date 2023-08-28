import { CreateUser } from '../../auth/interfaces/register.interface';

export interface User extends CreateUser {
  phone: string;
}
