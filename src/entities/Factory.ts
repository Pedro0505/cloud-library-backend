import { Router } from 'express';
import BookController from './books/BookController';
import BookRepository from './books/BookRepository';
import BookRoutes from './books/BookRoutes';
import BookService from './books/BookService';
import OrmInjection from '../class/OrmInjection';
import WriterController from './writers/WriterController';
import WriterRepository from './writers/WriterRepository';
import WriterRoutes from './writers/WriterRoutes';
import WriterService from './writers/WriterService';

class Factory {
  public static get booksRouter() {
    const repository = new BookRepository(new OrmInjection());
    const service = new BookService(repository);
    const controller = new BookController(service);
    const router = new BookRoutes(Router(), controller);

    return router.routes;
  }

  public static get writersRouter() {
    const repository = new WriterRepository(new OrmInjection());
    const service = new WriterService(repository);
    const controller = new WriterController(service);
    const router = new WriterRoutes(Router(), controller);

    return router.routes;
  }
}

export default Factory;
