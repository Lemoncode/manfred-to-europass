import { Identification } from "./identification.model";
import { WorkExperience } from "./workExperience.model";
import { Skills } from "./skills.model";

export interface LearnerInfo {
  identification: Identification;
  workExperienceList: WorkExperience[];
  skills: Skills[];
}
