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
import BookWriterRepository from './booksWriters/BookWriterRepository';
import BookWriterService from './booksWriters/BookWriterService';
import BookWriterController from './booksWriters/BookWriterController';
import BookWriterRoutes from './booksWriters/BookWriterRoutes';

class Factory {
  public static get booksRouter() {
    const repository = new BookRepository(new OrmInjection());
    const bookWriterRepository = new BookWriterRepository(new OrmInjection());
    const writerRepository = new WriterRepository(new OrmInjection());
    const service = new BookService(repository, writerRepository, bookWriterRepository);
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

  public static get booksWritersRouter() {
    const repository = new BookWriterRepository(new OrmInjection());
    const service = new BookWriterService(repository);
    const controller = new BookWriterController(service);
    const router = new BookWriterRoutes(Router(), controller);

    return router.routes;
  }
}

export default Factory;
