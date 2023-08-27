import { EXPERIENCE } from '../constant/experience.constant';

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  experience: EXPERIENCE;
}
