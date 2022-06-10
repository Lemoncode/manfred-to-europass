// TODO add Aliases
import * as model from "models/europass";

const nodeNames = {
  SkillsPassport: "SkillsPassport",
};

interface RootInfo {
  document: Document;
  root: HTMLElement;
}

const generateXMLRoot = (): RootInfo => {
  const seedXml =
    '<SkillsPassport xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"></SkillsPassport>';

  var parser = new DOMParser();
  const xmlDocument = parser.parseFromString(seedXml, "application/xml");

  return {
    document: xmlDocument,
    root: xmlDocument.createElement(nodeNames.SkillsPassport),
  };
};

export const generateSkillsPassport = (
  skillsPassport: model.SkillsPassport
): string => {
  let output: string = "";

  const root = generateXMLRoot();

  //generateDocumentInfo();

  output = new XMLSerializer().serializeToString(root.document);

  /*
  // TODO Add XMLWriter like parameter
  generateDocumentInfo();
  generatePrintingPreferences();
  generateLearnerInfo();
  */

  return output;
};
