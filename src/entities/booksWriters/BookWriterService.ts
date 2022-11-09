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
}

export default BookWriterService;
