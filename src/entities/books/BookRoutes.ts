import { Router } from 'express';
import IRoutes from '../../interfaces/IRoutes';
import IBookController from './interfaces/IBookController';

class BookRoutes implements IRoutes {
  private _controller: IBookController;
  private _route: Router;

  constructor(router: Router, controller: IBookController) {
    this._controller = controller;
    this._route = router;

    this._route.get('/', this._controller.getAll);

    this._route.post('/', this._controller.create);
  }

  public get routes() {
    return this._route;
  }
}

export default BookRoutes;
