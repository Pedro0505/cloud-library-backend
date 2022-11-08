import { IBook, IBookId } from './IBook';

interface IBookService {
  getAll(): Promise<IBookId[]>
  create(_data: IBook): Promise<IBookId>
}

export default IBookService;
