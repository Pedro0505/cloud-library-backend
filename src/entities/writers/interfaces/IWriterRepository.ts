import { IWriterId, IWriter } from './IWriter';

interface IWriterRepository {
  getAll(): Promise<IWriterId[]>
  findWriterById(id: number): Promise<IWriterId | null>;
  create(data: IWriter): Promise<IWriterId>
}

export default IWriterRepository;
