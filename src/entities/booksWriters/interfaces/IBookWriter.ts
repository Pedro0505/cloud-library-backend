import { IBookId } from '../../books/interfaces/IBook';
import { IWriterId } from '../../writers/interfaces/IWriter';

interface IBookWriter {
  booksId: number;
  writersId: number;
}

interface IBookWriterIncludes extends IBookWriter {
  books: IBookId;
  writers: IWriterId;
}

export { IBookWriterIncludes, IBookWriter };
