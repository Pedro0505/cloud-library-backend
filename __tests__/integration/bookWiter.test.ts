import prisma from '../../src/database/prisma';
import request from 'supertest';
import { app } from '../../src/api/App';
import bookSeed from '../seeds/books';
import writeSeed from '../seeds/writers';
import booksWriters from '../seeds/booksWriters';
import PathRoutes from '../constants/PathRoutes';
import booksWritersMock from '../__mocks__/booksWriters';

describe('Testing the route /writers', () => {
  describe('Testing the GET /writers', () => {
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

    it('Testing the sucess response of GET in /bookWriter', async () => {
      const { body, status } = await request(app).get(PathRoutes.BOOKSWRITERS);

      expect(status).toBe(200);
      expect(body).toStrictEqual({ data: booksWritersMock });
    });
  });
});
