import { TYPE_ADVISER } from '../constant/comission.constant';

export interface Target {
  type: keyof typeof TYPE_ADVISER;
  price: number;
}
