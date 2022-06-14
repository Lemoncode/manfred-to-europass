import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { rootNodeNames } from "./nodes.const";

export const generateDocumentInfoElement = (
  rootInfo: XMLBuilder,
  documentInfo: model.DocumentInfo
) => {
  const documentInfoNode = rootInfo.ele(rootNodeNames.DocumentInfo);

  documentInfoNode.ele("DocumentType").txt(documentInfo.documentType); // ECV
  // TODO How to serialize date to UTC --> DateFns
  documentInfoNode
    .ele("CreationDate")
    .txt(documentInfo.creationDate.toISOString()); //"2013-07-01T07:18:01.579Z"
  documentInfoNode
    .ele("LastUpdateDate")
    .txt(documentInfo.lastUpdateDate.toISOString()); //"2013-07-01T07:18:01.579Z"
  documentInfoNode.ele("XSDVersion").txt(documentInfo.xsdVersion); // "3.0"
  documentInfoNode.ele("Generator").txt(documentInfo.generator); // "EWA"
  documentInfoNode.ele("Comment").txt(documentInfo.comment); //"Europass CV"
};
