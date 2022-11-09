import { NextFunction, Request, Response } from 'express';
import ValidatorMiddleware from '../../class/ValidatorMiddleware';
import BookSchema from './BookSchemas';

class BooksMiddleware extends ValidatorMiddleware {
  private _schema: BookSchema;

  constructor(schema: BookSchema) {
    super();
    this._schema = schema;
  }

  public createValidate = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this._schema.createTask().validate(req.body);

    if (error) {
      const { code, message } = super.handleError(error.message.split('|'));
      return res.status(code).json({ error: { message } });
    }

    next();
  };
}

export default BooksMiddleware;
