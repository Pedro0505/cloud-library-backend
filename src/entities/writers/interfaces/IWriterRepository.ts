import { IWriterId, IWriter } from './IWriter';

interface IWriterRepository {
  getAll(): Promise<IWriterId[]>
  create(data: IWriter): Promise<IWriterId>
}

export default IWriterRepository;
