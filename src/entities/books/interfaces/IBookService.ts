import { NotFound } from '../../../helpers/httpResponses/NotFound';
import { IBook, IBookId } from './IBook';

interface IBookService {
  getAll(): Promise<IBookId[]>
  create(data: IBook): Promise<IBookId | NotFound>
}

export default IBookService;
