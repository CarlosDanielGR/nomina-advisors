import { Target } from '../../../interfaces/commission.interface';

export const TARGETS: Target[] = [
  {
    type: 'Junior',
    price: 5000000,
  },
  {
    type: 'Senior',
    price: 10000000,
  },
  {
    type: 'Master',
    price: 15000000,
  },
];

export enum TYPE_CRUP {
  edit = 1,
  create,
  remove,
}
