import { IBookWriter, IBookWriterIncludes } from "./IBookWriter";

interface IBookWriterService {
  getAllIncludesWritersAndBook(): Promise<IBookWriterIncludes[]>
}

export default IBookWriterService;
