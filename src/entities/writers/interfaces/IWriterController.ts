import { NextFunction, Request, Response } from 'express';
import { IWriterId } from './IWriter';

interface IWriterController {
  getAll(req: Request, res: Response, next?: NextFunction): Promise<Response>
  create(req: Request, res: Response, next?: NextFunction): Promise<Response>
}

export default IWriterController;

