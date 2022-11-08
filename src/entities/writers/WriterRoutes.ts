import { Router } from 'express';
import IRoutes from '../interfaces/IRoutes';
import WriterController from './WriterController';

class WriterRoutes implements IRoutes {
  private _controller: WriterController;
  private _route: Router;

  constructor(router: Router, controller: WriterController) {
    this._controller = controller;
    this._route = router;
  }

  public get routes() {
    return this._route;
  }
}

export default WriterRoutes;
