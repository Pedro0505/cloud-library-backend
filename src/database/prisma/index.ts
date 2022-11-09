import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const ENV = process.env.NODE_ENV || 'prod';

const DB_URLS = {
  test: process.env.DATABASE_URL_TEST,
  prod: process.env.DATABASE_URL,
};

const url = DB_URLS[ENV as keyof typeof DB_URLS];

const prisma = new PrismaClient({ datasources: { db: { url } } });

export default prisma;
