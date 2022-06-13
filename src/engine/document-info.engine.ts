import * as model from "models/europass";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

export const generateDocumentInfoElement = (rootInfo: RootInfo) => {
  const documentInfoNode = rootInfo.root.ele(rootNodeNames.DocumentInfo);

  documentInfoNode.ele("DocumentType").txt("ECV");
  // TODO How to serialize date to UTC --> DateFns
  documentInfoNode.ele("CreationDate").txt("2013-07-01T07:18:01.579Z");
  documentInfoNode.ele("LastUpdateDate").txt("2013-07-01T07:18:01.579Z");
  documentInfoNode.ele("XSDVersion").txt("3.0");
  documentInfoNode.ele("Generator").txt("EWA");
  documentInfoNode.ele("Comment").txt("Europass CV");
};
