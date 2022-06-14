import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { rootNodeNames } from "./nodes.const";

export const generateLearnerInfoElement = (rootInfo: XMLBuilder) => {
  // LearnerInfo
  const learnerInfoNode = rootInfo.ele(rootNodeNames.LearnerInfo);

  // Identification
  const identificationNode = learnerInfoNode.ele("Identification");
  const personName = identificationNode.ele("PersonName");
  personName.ele("FirstName").txt("John");
  personName.ele("Surname").txt("Smith");

  // WorkExperienceList
  learnerInfoNode.ele("WorkExperienceList");
  // Skills
  learnerInfoNode.ele("Skills");
};
