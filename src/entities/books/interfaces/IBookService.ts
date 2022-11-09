import { NotFound } from '../../../helpers/httpResponses/NotFound';
import { IBook, IBookId } from './IBook';
import ICreateBookBody from './ICreateBook';

interface IBookService {
  getAll(): Promise<IBookId[]>
  create(data: ICreateBookBody): Promise<IBookId | NotFound>
}

export default IBookService;
