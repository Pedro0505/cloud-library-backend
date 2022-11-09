interface IWriter {
  name: string;
  birthDate: Date;
  sex: string;
}

interface IWriterId extends IWriter{
  id: number;
}

export { IWriterId, IWriter };
