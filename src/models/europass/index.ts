import { DocumentInfo } from "./documentInfo.model";
import { PrintingPreferences } from "./printingPreferences.model";
import { LearnerInfo } from "./learnerInfo";
import { generateDocumentInfoElement } from "@/engine/document-info.engine";

// Root
export interface SkillsPassport {
  documentInfo?: DocumentInfo;
  printingPreferences?: PrintingPreferences;
  learnerInfo?: LearnerInfo;
}

export * from "./documentInfo.model";
