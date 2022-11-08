import { Request, Response } from 'express';
import { IBook, IBookId } from './interfaces/IBook';
import IBookController from './interfaces/IBookController';
import IBookService from './interfaces/IBookService';

class BookController implements IBookController {
  private _service: IBookService;

  constructor(service: IBookService) {
    this._service = service;
  }
  public getAll = async (req: Request, res: Response) => {
    const data = await this._service.getAll();

    return res.status(200).json({ data });
  };

  public create = async (req: Request, res: Response): Promise<Response<IBookId>> => {
    const { content }: { content: IBook } = req.body;

    const data = await this._service.create(content);

    return res.status(201).json({ data });
  };
}

export default BookController;
