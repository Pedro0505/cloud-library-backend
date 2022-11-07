import { IBookId } from '../../../entities/Books/interfaces/IBook';

const booksData: IBookId[] = [
  {
    id: 1,
    title: 'Clean Code',
    caption: 'A Handbook of Agile Software Craftmanship',
    publicationDate: new Date('08/01/2008'),
  },
  {
    id: 2,
    title: 'Refactoring',
    caption: 'Improving the Design of Existing Code',
    publicationDate: new Date('01/01/1999'),
  },
  {
    id: 3,
    title: 'Domain Driven Design',
    caption: 'Tackling Complexity in the Heart of Software',
    publicationDate: new Date('08/22/2003'),
  },
];

export default booksData;
