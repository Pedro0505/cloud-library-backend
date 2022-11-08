import { IWriter } from './interfaces/IWriter';
import IWriterRepository from './interfaces/IWriterRepository';

class WriterService {
  private _repository: IWriterRepository;

  constructor(repository: IWriterRepository) {
    this._repository = repository;
  }

  public getAll() {
    return this._repository.getAll();
  }

  public create(data: IWriter) {
    return this._repository.create(data);
  }
}

export default WriterService;
