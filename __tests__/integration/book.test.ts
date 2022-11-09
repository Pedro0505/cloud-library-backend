import prisma from '../../src/database/prisma';
import request from 'supertest';
import { app } from '../../src/api/App';
import bookSeed from '../seeds/books';
import writeSeed from '../seeds/writers';
import booksWriters from '../seeds/booksWriters';
import booksMock from '../__mocks__/books';
import PathRoutes from '../constants/PathRoutes';

describe('Testing the route /books', () => {
  describe('Testing the GET /books', () => {
    beforeAll(async () => {
      await prisma.$transaction([
        prisma.books.createMany({ data: bookSeed }),
        prisma.writers.createMany({ data: writeSeed }),
        prisma.booksWriters.createMany({ data: booksWriters }),
      ]);
    });

    afterAll(async () => {
      await prisma.$transaction([
        prisma.booksWriters.deleteMany(),
        prisma.books.deleteMany(),
        prisma.writers.deleteMany(),
      ]);

      await prisma.$disconnect();
    });

    it('Testing the response of GET in /books', async () => {
      const { body, status } = await request(app).get(PathRoutes.BOOKS);

      expect(status).toBe(200);
      expect(body).toStrictEqual({ data: booksMock });
    });
  });
});
