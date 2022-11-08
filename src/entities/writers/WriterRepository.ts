import OrmInjection from '../../class/OrmInjection';
import { IWriter } from './interfaces/IWriter';
import IWriterRepository from './interfaces/IWriterRepository';

class WriterRepository implements IWriterRepository {
  private _prisma: OrmInjection;

  constructor(orm: OrmInjection) {
    this._prisma = orm;
  }

  public async getAll() {
    const writers = await this._prisma.writers.findMany();

    return writers;
  }

  public async create(data: IWriter) {
    return this._prisma.writers.create({ data });
  }
}

export default WriterRepository;
