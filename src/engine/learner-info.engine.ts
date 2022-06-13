import * as model from "models/europass";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

export const generateLearnerInfoElement = (rootInfo: RootInfo) => {
  const learnerInfoNode = rootInfo.root.ele(rootNodeNames.LearnerInfo);

  const identificationNode = learnerInfoNode.ele("Identification");
  identificationNode.ele("FirstName").txt("John");
  identificationNode.ele("SurName").txt("Smith");

  // Identification

  // WorkExperienceList
  // Skills
};
