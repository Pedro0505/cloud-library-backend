import { Request, Response } from 'express';
import { IBookWriter } from './interfaces/IBookWriter';
import IBookWriterController from './interfaces/IBookWriterController';
import IBookWriterService from './interfaces/IBookWriterService';

class BookWriterController implements IBookWriterController {
  private _service: IBookWriterService;

  constructor(service: IBookWriterService) {
    this._service = service;
  }

  public getAllIncludesWritersAndBook = async (req: Request, res: Response) => {
    const data = await this._service.getAllIncludesWritersAndBook();

    return res.status(200).json({ data });
  };

  public create = async (req: Request, res: Response) => {
    const { content }: { content: IBookWriter } = req.body;

    const data = await this._service.create(content);

    return res.status(201).json({ data });
  };
}

export default BookWriterController;
