import { Target } from '../interfaces/nomina.interface';

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

export enum TYPE_ADVISER {
  Junior = 1,
  Senior,
  Master,
}

export enum TYPE_CRUP {
  edit = 1,
  create,
  remove,
}
