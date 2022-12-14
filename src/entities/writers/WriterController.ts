import { Request, Response } from 'express';
import BadRequest from '../../helpers/httpResponses/class/BadRequest';
import { IWriter } from './interfaces/IWriter';
import IWriterController from './interfaces/IWriterController';
import IWriterService from './interfaces/IWriterService';

class WriterController implements IWriterController {
  private _service: IWriterService;

  constructor(service: IWriterService) {
    this._service = service;
  }

  public findWriterById = async (req: Request, res:Response) => {
    const { id } = req.params;

    const data = await this._service.findWriterById(+id);

    if (data instanceof BadRequest) {
      const { reponse: { code, error } } = data;
      return res.status(code).json({ error });
    }

    return res.status(200).json({ data });
  };

  public getAll = async (req: Request, res:Response) => {
    const data = await this._service.getAll();

    return res.status(200).json({ data });
  };

  public create = async (req: Request, res:Response) => {
    const { birthDate, name, sex }: IWriter = req.body;

    const data = await this._service.create({ birthDate, name, sex });

    return res.status(201).json({ data });
  };
}

export default WriterController;
