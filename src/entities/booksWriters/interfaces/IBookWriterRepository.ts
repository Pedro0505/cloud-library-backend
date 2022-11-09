import { IBookWriter, IBookWriterIncludes } from "./IBookWriter";

interface IBookWriterRepository {
  getAllIncludesWritersAndBook(): Promise<IBookWriterIncludes[]>
  create(data: IBookWriter): Promise<IBookWriter>
}

export default IBookWriterRepository;
