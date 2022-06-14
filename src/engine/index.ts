import { create } from "xmlbuilder2";

import * as model from "models/europass";
import { rootNodeNames } from "./nodes.const";
import { generateDocumentInfoElement } from "./document-info.engine";
import { generateLearnerInfoElement } from "./learner-info.engine";
import { generatePrintingPreferences } from "./printing-preferences.engine";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";

const generateXMLRoot = (): XMLBuilder => {
  const root = create({});

  const skillsNode = root.ele(rootNodeNames.SkillsPassport, {
    xmlns: "http://europass.cedefop.europa.eu/Europass",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation":
      "http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd",
    locale: "en",
  });

  return skillsNode;
};

export const generateSkillsPassport = (
  skillsPassport: model.SkillsPassport
): string => {
  const rootInfo = generateXMLRoot();

  if (skillsPassport.documentInfo) {
    generateDocumentInfoElement(rootInfo);
  }
  if (skillsPassport.printingPreferences) {
    generatePrintingPreferences(rootInfo);
  }
  if (skillsPassport.learnerInfo) {
    generateLearnerInfoElement(rootInfo);
  }

  /*
  // TODO Add XMLWriter like parameter
  generateDocumentInfo();
  generatePrintingPreferences();
  generateLearnerInfo();
  */

  //const pretty = rootInfo.root.end({ prettyPrint: true });

  return rootInfo.end();
};
