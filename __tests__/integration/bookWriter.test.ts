import prisma from '../../src/database/prisma';
import request from 'supertest';
import { app } from '../../src/api/App';
import booksData from '../__mocks__/books';
import booksWritersData from '../__mocks__/booksWriters';
import writersData from '../__mocks__/writers';

describe('Testando a rota /bookWriter', () => {
  describe('Testando o GET /tasks', () => {
    beforeAll(async () => {
      await prisma.books.createMany({ data: booksData });
      await prisma.writers.createMany({ data: writersData });
      await prisma.booksWriters.createMany({ data: booksWritersData });
    });

    afterAll(async () => {
      await prisma.books.deleteMany();

      await prisma.$disconnect();
    });
  });
});
