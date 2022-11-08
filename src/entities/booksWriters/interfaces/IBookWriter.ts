import { IBookId } from '../../books/interfaces/IBook';

interface IBookWriterId {
  booksId: number;
  writersId: number;
}

interface IBookWriter extends IBookWriterId {
  books: IBookId;
  writers: IBookWriterId;
}

export { IBookWriterId, IBookWriter };
