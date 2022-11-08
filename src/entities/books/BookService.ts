import { IBookId, IBook } from './interfaces/IBook';
import IBookRepository from './interfaces/IBookRepository';
import IBookService from './interfaces/IBookService';

class BookService implements IBookService {
  private _repository: IBookRepository;

  constructor(repository: IBookRepository) {
    this._repository = repository;
  }

  public getAll(): Promise<IBookId[]> {
    return this._repository.getAll();
  }

  public create(data: IBook): Promise<IBookId> {
    return this._repository.create(data);
  }
}

export default BookService;
