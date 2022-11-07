import prisma from '../prisma';
import booksData from './data/books';
import booksWritersData from './data/booksWriters';
import writersData from './data/writers';

async function main() {
  await prisma.books.createMany({ data: booksData });
  await prisma.writers.createMany({ data: writersData });
  await prisma.booksWriters.createMany({ data: booksWritersData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
