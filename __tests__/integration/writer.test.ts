import prisma from '../../src/database/prisma';
import request from 'supertest';
import { app } from '../../src/api/App';
import bookSeed from '../seeds/books';
import writeSeed from '../seeds/writers';
import booksWriters from '../seeds/booksWriters';
import writerMock from '../__mocks__/writers';
import PathRoutes from '../constants/PathRoutes';

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

    it('Testing the response of GET in /writers', async () => {
      const { body, status } = await request(app).get(PathRoutes.WRITERS);

      expect(status).toBe(200);
      expect(body).toStrictEqual({ data: writerMock });
    });
  });

  describe('Testing the POST /writers', () => {
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

    it('Testing the sucess response', async () => {
      const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'Jonh Doe', birthDate: '1999-01-01T00:00:00.000Z', sex: 'Male' });

      expect(status).toBe(201);
      expect(body).toStrictEqual({ data: { id: 5, name: "Jonh Doe", birthDate: "1999-01-01T00:00:00.000Z", sex: "Male" } });
    });

    describe('Testing when have a invalid body', () => {
      describe('Testing the field "name"', () => {
        it('Testing when the "name" is not send', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ birthDate: '1999-01-01T00:00:00.000Z', sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"name\" is required" } });
        });

        it('Testing when the "name" is empty', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: '', birthDate: '1999-01-01T00:00:00.000Z', sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"name\" can't be empty" } });
        });

        it('Testing when the "name" is send with more than 45 of length', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 's'.repeat(46), birthDate: '1999-01-01T00:00:00.000Z', sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"name\" can't be more than 45" } });
        });

        it('Testing when the "name" is not a string', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 1, birthDate: '1999-01-01T00:00:00.000Z', sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"name\" must be a string" } });
        });
      });

      describe('Testing the field "birthDate"', () => {
        it('Testing when the "birthDate" is not send', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'John Doe', sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"birthDate\" is required" } });
        });

        it('Testing when the "birthDate" is not a string', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'John Doe', birthDate: 1, sex: 'Male' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"birthDate\" must be a string" } });
        });
        
        it('Testing when the "birthDate" is invalid format', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'John Doe', birthDate: '1-01-01T00:00:00.000Z', sex: 'Male' });
  
          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"birthDate\" is invalid date format" } });
        });
      });

      describe('Testing the field "sex"', () => {
        it('Testing when the "sex" is not send', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'Jonh Doe', birthDate: '1999-01-01T00:00:00.000Z' });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"sex\" is required" } });
        });

        it('Testing when the "sex" is not a string', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'Jonh Doe', birthDate: '1999-01-01T00:00:00.000Z', sex: 2 });

          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"sex\" must be a string" } });
        });
        
        it('Testing when the "sex" when it\'s not Male|Female|Other', async () => {
          const { body, status } = await request(app).post(PathRoutes.WRITERS).send({ name: 'Jonh Doe', birthDate: '1999-01-01T00:00:00.000Z', sex: 'Lorem Ipsum' });
  
          expect(status).toBe(400);
          expect(body).toStrictEqual({ error: { message: "\"sex\" must be Male, Female or Other" } });
        });
      });
    });
  });
});
