import * as model from "models/europass";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

export const generateLearnerInfoElement = (rootInfo: RootInfo) => {
  // LearnerInfo
  const learnerInfoNode = rootInfo.root.ele(rootNodeNames.LearnerInfo);

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
