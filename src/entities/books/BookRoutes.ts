import { Router } from 'express';
import IRoutes from '../../interfaces/IRoutes';
import BooksMiddleware from './BookMiddleware';
import IBookController from './interfaces/IBookController';

class BookRoutes implements IRoutes {
  private _controller: IBookController;
  private _route: Router;
  private _middleware: BooksMiddleware;

  constructor(router: Router, controller: IBookController, middleware: BooksMiddleware) {
    this._controller = controller;
    this._route = router;
    this._middleware = middleware;

    this._route.get('/', this._controller.getAll);

    this._route.post('/', this._middleware.createValidate, this._controller.create);
  }

  public get routes() {
    return this._route;
  }
}

export default BookRoutes;
