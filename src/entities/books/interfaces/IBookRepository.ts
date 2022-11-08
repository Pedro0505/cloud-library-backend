import { IBook, IBookId } from './IBook';

interface IBookRepository {
  getAll(): Promise<IBookId[]>
  create(data: IBook): Promise<IBookId>
}

export default IBookRepository;
