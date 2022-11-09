import prisma from '../../src/database/prisma';
import request from 'supertest';
import { app } from '../../src/api/App';
import writersData from '../__mocks__/writers';

describe('Testando a rota /tasks', () => {
  describe('Testando o GET /tasks', () => {
    beforeAll(async () => {
      await prisma.writers.createMany({ data: writersData });
    });

    afterAll(async () => {
      await prisma.books.deleteMany();

      await prisma.$disconnect();
    });
  });
});
