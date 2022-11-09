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

  describe('Testing the POST /books', () => {
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

    it('Testing the response of POST in /books', async () => {
      const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', caption: 'Life of Jonh Doe', writerId: 1 });

      expect(status).toBe(201);
      expect(body).toStrictEqual({ data: { id: 6, title: "Jonh Doe", publicationDate: "2000-01-01T00:00:00.000Z", caption: "Life of Jonh Doe" } });
    });

    describe('Testing when have a invalid body', () => {
      describe('Testing the field "caption"', () => {
        it('Testing when the "caption" is not send', async () => {
          const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', writerId: 1 });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"caption\" is required" } });
        });

        it('Testing when the "caption" is empty', async () => {
          const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', writerId: 1, caption: '' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"caption\" can't be empty" } });
        });

        it('Testing when the "caption" is send with less than 5 of length', async () => {
          const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', writerId: 1, caption: 'ss' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"caption\" can't be less than 5" } });
        });

        it('Testing when the "caption" is send with more than 45 of length', async () => {
          const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', writerId: 1, caption: 's'.repeat(46) });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"caption\" can't be more than 45" } });
        });

        it('Testing when the "caption" is not a number', async () => {
          const { body, status } = await request(app).post(PathRoutes.BOOKS).send({ title: 'Jonh Doe', publicationDate: '2000-01-01T00:00:00.000Z', writerId: 1, caption: 1 });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"caption\" must be a string" } });
        });
      });
    });
  });
});
