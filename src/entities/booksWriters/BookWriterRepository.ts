import OrmInjection from '../../class/OrmInjection';
import { IBookWriter } from './interfaces/IBookWriter';
import IBookWriterRepository from './interfaces/IBookWriterRepository';

class BookWriterRepository implements IBookWriterRepository {
  private _prisma: OrmInjection;

  constructor(orm: OrmInjection) {
    this._prisma = orm;
  }

  public async getAllIncludesWritersAndBook() {
    const books = await this._prisma.booksWriters.findMany({
      include: { books: true, writers: true },
    });

    return books;
  }

  public async create(data: IBookWriter) {
    return this._prisma.booksWriters.create({ data });
  }
}

export default BookWriterRepository;
