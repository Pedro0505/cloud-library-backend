import { IWriter } from './IWriter';

interface IWriterService {
  getAll(): Promise<IWriter[]>
  create(data: IWriter): Promise<IWriter>
}

export default IWriterService;
