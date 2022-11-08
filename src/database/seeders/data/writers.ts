import { IWriterId } from '../../../entities/Writers/interfaces/IWriter';

const writersData: IWriterId[] = [
  {
    id: 1,
    name: 'Robert Cecil Martin',
    sex: 'Male',
    birthDate: new Date('05/12/1952'),
  },
  {
    id: 2,
    name: 'Martin Fowler',
    sex: 'Male',
    birthDate: new Date('12/18/1963'),
  },
  {
    id: 3,
    name: 'Eric Evans',
    sex: 'Male',
    birthDate: new Date('07/02/1975'),
  },
];

export default writersData;
