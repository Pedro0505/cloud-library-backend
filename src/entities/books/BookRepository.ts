import OrmInjection from '../class/OrmInjection';
import { IBook } from './interfaces/IBook';
import IBookRepository from './interfaces/IBookRepository';

class BookRepository implements IBookRepository {
  prisma: OrmInjection;

  constructor(orm: OrmInjection) {
    this.prisma = orm;
  }

  public async getAll() {
    const books = await this.prisma.books.findMany();

    return books;
  }

  public async create(data: IBook) {
    return this.prisma.books.create({ data });
  }
}

export default BookRepository;
