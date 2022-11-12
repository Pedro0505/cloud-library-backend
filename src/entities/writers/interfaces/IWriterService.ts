import { NotFound } from '../../../helpers/httpResponses/NotFound';
import { IWriter, IWriterId } from './IWriter';

interface IWriterService {
  getAll(): Promise<IWriter[]>
  findWriterById(name: number): Promise<IWriterId | NotFound>;
  create(data: IWriter): Promise<IWriter>
}

export default IWriterService;
