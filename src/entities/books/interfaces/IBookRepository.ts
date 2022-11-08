import { IBook, IBookId } from './IBook';

interface IBookRepository {
  getAll(): Promise<IBookId[]>
  create(_data: IBook): Promise<IBookId>
}

export default IBookRepository;
