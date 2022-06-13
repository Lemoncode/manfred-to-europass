// TODO add Aliases
import * as model from "models/europass";
import { generateDocumentInfoElement } from "./document-info.engine";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";
import { create } from "xmlbuilder2";
import { generateLearnerInfoElement } from "./learner-info.engine";

const generateXMLRoot = (): RootInfo => {
  const root = create({});

  const skillsNode = root.ele(rootNodeNames.SkillsPassport, {
    xmlns: "http://europass.cedefop.europa.eu/Europass",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation":
      "http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd",
    locale: "en",
  });

  return {
    root: skillsNode,
  };
};

export const generateSkillsPassport = (
  skillsPassport: model.SkillsPassport
): string => {
  const rootInfo = generateXMLRoot();

  if (skillsPassport.documentInfo) {
    generateDocumentInfoElement(rootInfo);
  }

  // Harcoded right now
  generateLearnerInfoElement(rootInfo);

  /*
  // TODO Add XMLWriter like parameter
  generateDocumentInfo();
  generatePrintingPreferences();
  generateLearnerInfo();
  */

  const pretty = rootInfo.root.end({ prettyPrint: true });

  return rootInfo.root.end();
};
