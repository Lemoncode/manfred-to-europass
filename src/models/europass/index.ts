import { DocumentInfo } from "./documentInfo";
import { PrintingPreferences } from "./printingPreferences";
import { LearnerInfo } from "./learnerInfo";

// Root
export interface SkillsPassport {
  documentInfo: DocumentInfo;
  printingPreferences: PrintingPreferences;
  learnerInfo: LearnerInfo;
}
