import { NotFound } from '../../helpers/httpResponses/NotFound';
import { IWriter } from './interfaces/IWriter';
import IWriterRepository from './interfaces/IWriterRepository';
import IWriterService from './interfaces/IWriterService';

class WriterService implements IWriterService {
  private _repository: IWriterRepository;

  constructor(repository: IWriterRepository) {
    this._repository = repository;
  }

  public async findWriterById(id: number) {
    const writer = await this._repository.findWriterById(id);

    if (!writer) {
      return new NotFound('Writer Not Found');
    }

    return writer;
  }

  public async getAll() {
    return this._repository.getAll();
  }

  public async create(data: IWriter) {
    return this._repository.create(data);
  }
}

export default WriterService;
