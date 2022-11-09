import { IBookWriter, IBookWriterIncludes } from "./IBookWriter";

interface IBookWriterService {
  getAllIncludesWritersAndBook(): Promise<IBookWriterIncludes[]>
  create(data: IBookWriter): Promise<IBookWriter>
}

export default IBookWriterService;
