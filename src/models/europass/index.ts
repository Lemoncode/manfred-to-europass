import { DocumentInfo } from "./documentInfo.model";
import { PrintingPreferences } from "./printingPreferences.model";
import { LearnerInfo } from "./learnerInfo";

// Root
export interface SkillsPassport {
  documentInfo: DocumentInfo;
  printingPreferences: PrintingPreferences;
  learnerInfo: LearnerInfo;
}

export * from "./documentInfo.model";
export * from "./printingPreferences.model";
export * from "./learnerInfo";
