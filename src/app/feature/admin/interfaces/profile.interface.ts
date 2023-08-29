import { CreateUser } from '../../auth/interfaces/register.interface';
import { Sale } from './sale.interface';

export interface User extends CreateUser {
  phone: string;
  total: number;
  id: string;
  sales: Sale[];
}
