import { Router } from 'express';
import IRoutes from '../../interfaces/IRoutes';
import WriterController from './WriterController';

class WriterRoutes implements IRoutes {
  private _controller: WriterController;
  private _route: Router;

  constructor(router: Router, controller: WriterController) {
    this._controller = controller;
    this._route = router;

    this._route.get('/', this._controller.getAll);

    this._route.post('/', this._controller.create);
  }

  public get routes() {
    return this._route;
  }
}

export default WriterRoutes;
