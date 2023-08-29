import { Target } from '../interfaces/nomina.interface';

export const TARGETS: Target[] = [
  {
    type: 'junior',
    price: 5000000,
  },
  {
    type: 'senior',
    price: 10000000,
  },
  {
    type: 'master',
    price: 15000000,
  },
];

export enum TYPE_ADVISER {
  junior = 1,
  senior,
  master,
}

export enum TYPE_CRUP {
  edit = 1,
  create,
  remove,
}
