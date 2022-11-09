import OrmInjection from '../../class/OrmInjection';
import { IBook } from './interfaces/IBook';
import IBookRepository from './interfaces/IBookRepository';

class BookRepository implements IBookRepository {
  private _prisma: OrmInjection;

  constructor(orm: OrmInjection) {
    this._prisma = orm;
  }

  public async getAll() {
    const books = await this._prisma.books.findMany();

    return books;
  }

  public async create(data: IBook) {
    return this._prisma.books.create({ data });
  }
}

export default BookRepository;
