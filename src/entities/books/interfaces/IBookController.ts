import { NextFunction, Request, Response } from 'express';
import { IBookId } from './IBook';

interface IBookController {
  getAll(req: Request, res: Response, next?: NextFunction): Promise<Response>
  create(req: Request, res: Response, next?: NextFunction): Promise<Response>
}

export default IBookController;

