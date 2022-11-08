import { IBook, IBookId } from './IBook';

interface IBookService {
  getAll(): Promise<IBookId[]>
  create(data: IBook): Promise<IBookId>
}

export default IBookService;
