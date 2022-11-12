import { NextFunction, Request, Response } from 'express';

interface IWriterController {
  getAll(req: Request, res: Response, next?: NextFunction): Promise<Response>
  create(req: Request, res: Response, next?: NextFunction): Promise<Response>
  findWriterById(req: Request, res: Response, next?: NextFunction): Promise<Response>;
}

export default IWriterController;

