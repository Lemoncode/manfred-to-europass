import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { rootNodeNames } from "./nodes.const";

export const generateLearnerInfoElement = (
  rootInfo: XMLBuilder,
  learnerInfo: model.LearnerInfo
) => {
  // LearnerInfo
  const learnerInfoNode = rootInfo.ele(rootNodeNames.LearnerInfo);

  // Identification
  const identificationNode = learnerInfoNode.ele("identification");
  const personName = identificationNode.ele("PersonName");
  personName
    .ele("FirstName")
    .txt(learnerInfo.identification.personName.firstName);
  personName.ele("Surname").txt(learnerInfo.identification.personName.surName);

  // WorkExperienceList
  learnerInfoNode.ele("WorkExperienceList");
  // Skills
  learnerInfoNode.ele("Skills");
};
