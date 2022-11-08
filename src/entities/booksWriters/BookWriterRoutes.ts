import { Router } from 'express';
import IRoutes from '../../interfaces/IRoutes';
import BookWriterController from './BookWriterController';

class BookWriterRoutes implements IRoutes {
  private _controller: BookWriterController;
  private _route: Router;

  constructor(router: Router, controller: BookWriterController) {
    this._controller = controller;
    this._route = router;
  }

  public get routes() {
    return this._route;
  }
}

export default BookWriterRoutes;
