interface IBook {
  title: string;
  publicationDate: Date;
  caption: string;
}

interface IBookId extends IBook {
  id: number;
}

export { IBook, IBookId };
