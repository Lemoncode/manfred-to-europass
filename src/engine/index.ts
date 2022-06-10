// TODO add Aliases
import * as model from "models/europass";
import { generateDocumentInfoElement } from "./document-info.engine";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

const generateXMLRoot = (): RootInfo => {
  const seedXml = `<${rootNodeNames.SkillsPassport} xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"></${rootNodeNames.SkillsPassport}>`;

  var parser = new DOMParser();
  const xmlDocument = parser.parseFromString(seedXml, "application/xml");

  return {
    document: xmlDocument,
    root: xmlDocument.getRootNode(), //xmlDocument.createElement(rootNodeNames.SkillsPassport),
  };
};

export const generateSkillsPassport = (
  skillsPassport: model.SkillsPassport
): string => {
  let output: string = "";

  const rootInfo = generateXMLRoot();

  if (skillsPassport.documentInfo) {
    const documentInfoElement = generateDocumentInfoElement(rootInfo);
    rootInfo.root.appendChild(documentInfoElement);
  }

  //generateDocumentInfo();

  output = new XMLSerializer().serializeToString(rootInfo.document);

  /*
  // TODO Add XMLWriter like parameter
  generateDocumentInfo();
  generatePrintingPreferences();
  generateLearnerInfo();
  */

  return output;
};
