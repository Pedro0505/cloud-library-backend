import { Router } from 'express';
import BookController from './books/BookController';
import BookRepository from './books/BookRepository';
import BookRoutes from './books/BookRoutes';
import BookService from './books/BookService';
import OrmInjection from './class/OrmInjection';

class Factory {
  public static get booksRouter() {
    const repository = new BookRepository(new OrmInjection());
    const service = new BookService(repository);
    const controller = new BookController(service);
    const router = new BookRoutes(Router(), controller);

    return router.routes;
  }
}

export default Factory;
