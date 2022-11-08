import { Request, Response } from 'express';
import { IWriter } from './interfaces/IWriter';
import IWriterController from './interfaces/IWriterController';
import IWriterService from './interfaces/IWriterService';

class WriterController implements IWriterController {
  private _service: IWriterService;

  constructor(service: IWriterService) {
    this._service = service;
  }

  public getAll = async (req: Request, res:Response) => {
    const data = await this._service.getAll();

    return res.status(200).json({ data });
  };

  public create = async (req: Request, res:Response) => {
    const { content }: { content: IWriter } = req.body;

    const data = await this._service.create(content);

    return res.status(201).json({ data });
  };
}

export default WriterController;
