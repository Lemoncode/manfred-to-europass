import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { generateIdentificationElement } from "./learner-info";
import { rootNodeNames } from "./nodes.const";

export const generateLearnerInfoElement = (
  rootInfo: XMLBuilder,
  learnerInfo: model.LearnerInfo
) => {
  // LearnerInfo
  const learnerInfoNode = rootInfo.ele(rootNodeNames.LearnerInfo);

  // Identification
  generateIdentificationElement(learnerInfoNode, learnerInfo.identification);

  // WorkExperienceList
  learnerInfoNode.ele("WorkExperienceList");
  // Skills
  learnerInfoNode.ele("Skills");
};
