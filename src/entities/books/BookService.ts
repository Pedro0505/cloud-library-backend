import { NotFound } from '../../helpers/httpResponses/NotFound';
import BookWriterRepository from '../booksWriters/BookWriterRepository';
import IWriterRepository from '../writers/interfaces/IWriterRepository';
import IBookRepository from './interfaces/IBookRepository';
import IBookService from './interfaces/IBookService';
import ICreateBookBody from './interfaces/ICreateBook';

class BookService implements IBookService {
  private _repository: IBookRepository;
  private _writeRrepository: IWriterRepository;
  private _bookWriterRepository: BookWriterRepository;

  constructor(
    repository: IBookRepository,
    writeRrepository: IWriterRepository,
    bookWriterRepository: BookWriterRepository) {
    this._repository = repository;
    this._writeRrepository = writeRrepository;
    this._bookWriterRepository = bookWriterRepository;
  }

  public async getAll() {
    return this._repository.getAll();
  }

  public async create(data: ICreateBookBody) {
    const writerExists = await this._writeRrepository.findWriterById(data.writerId);

    if (!writerExists) {
      return new NotFound('Writer Not Found!');
    }

    const { caption, publicationDate, title, writerId } = data;

    const createdBook = await this._repository.create({ caption, publicationDate, title });

    await this._bookWriterRepository.create({ booksId: createdBook.id, writersId: writerId });

    return createdBook;
  }
}

export default BookService;
