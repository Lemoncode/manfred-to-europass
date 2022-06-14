import React from "react";

import { generateSkillsPassport } from "./engine/index";
import * as model from "models/europass";
export const App = () => {
  const hardcoreDocInfo: model.DocumentInfo = {
    documentType: "ECV",
    creationDate: new Date(),
    lastUpdateDate: new Date(),
    xsdVersion: "3.0",
    generator: "EWA",
    comment: "Europass CV",
  };
  const emptyPrintPreferences: model.PrintingPreferences = {
    type: null,
  };
  const learnerInfo: model.LearnerInfo = {
    identification: {
      personName: {
        firstName: "John",
        surName: "Smith",
      },
      contactInfo: null,
      demographics: null,
    },
    workExperienceList: [],
    skills: [],
  };
  const SkillsWithEmptyDocInfo: model.SkillsPassport = {
    documentInfo: hardcoreDocInfo,
    printingPreferences: emptyPrintPreferences,
    learnerInfo: learnerInfo,
  };
  console.log(generateSkillsPassport(SkillsWithEmptyDocInfo));
  return <h1>Hello world!!!!</h1>;
};
