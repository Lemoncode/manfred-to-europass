import { Identification } from "./identification";
import { WorkExperience } from "./workExperience";
import { Skills } from "./skills";

export interface LearnerInfo {
  identification: Identification;
  workExperienceList: WorkExperience[];
  skills: Skills[];
}
