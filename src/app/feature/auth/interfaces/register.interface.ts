import { TYPE_ADVISER } from 'src/app/shared/constant/comission.constant';

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  experience: TYPE_ADVISER;
  token?: string;
  nomina: number;
}
