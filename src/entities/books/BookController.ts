import { Request, Response } from 'express';
import BadRequest from '../../helpers/httpResponses/class/BadRequest';
import IBookController from './interfaces/IBookController';
import IBookService from './interfaces/IBookService';
import ICreateBookBody from './interfaces/ICreateBook';

class BookController implements IBookController {
  private _service: IBookService;

  constructor(service: IBookService) {
    this._service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this._service.getAll();

    return res.status(200).json({ data });
  };

  public create = async (req: Request, res: Response) => {
    const { content }: { content: ICreateBookBody } = req.body;

    const data = await this._service.create(content);

    if (data instanceof BadRequest) {
      const { reponse: { code, error } } = data;
      return res.status(code).json({ error });
    }

    return res.status(201).json({ data });
  };
}

export default BookController;
