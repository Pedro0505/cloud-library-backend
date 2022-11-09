import { NextFunction, Request, Response } from 'express';

interface IBookWriterController {
  getAllIncludesWritersAndBook(req: Request, res: Response, next?: NextFunction): Promise<Response>
  create(req: Request, res: Response, next?: NextFunction): Promise<Response>
}

export default IBookWriterController;

