import { Router } from 'express';
import IRoutes from '../../interfaces/IRoutes';
import WriterController from './WriterController';
import WriterMiddleware from './WriterMiddleware';

class WriterRoutes implements IRoutes {
  private _controller: WriterController;
  private _route: Router;
  private _middleware: WriterMiddleware;

  constructor(router: Router, controller: WriterController, middleware: WriterMiddleware) {
    this._controller = controller;
    this._route = router;
    this._middleware = middleware;

    this._route.get('/', this._controller.getAll);

    this._route.get('/:id', this._controller.findWriterById);

    this._route.post('/', this._middleware.createValidate, this._controller.create);
  }

  public get routes() {
    return this._route;
  }
}

export default WriterRoutes;
