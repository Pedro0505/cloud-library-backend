import { IBookWriter } from './interfaces/IBookWriter';
import IBookWriterRepository from './interfaces/IBookWriterRepository';
import IBookWriterService from './interfaces/IBookWriterService';

class BookWriterService implements IBookWriterService {
  private _repository: IBookWriterRepository;

  constructor(repository: IBookWriterRepository) {
    this._repository = repository;
  }

  public async getAllIncludesWritersAndBook() {
    const books = await this._repository.getAllIncludesWritersAndBook();

    return books;
  }

  public async create(data: IBookWriter) {
    return this._repository.create(data);
  }
}

export default BookWriterService;
