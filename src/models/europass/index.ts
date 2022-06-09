import { DocumentInfo } from "./documentInfo";
import { PrintingPreferences } from "./printingPreferences";
import { LearnerInfo } from "./learnerInfo";

// Root
interface SkillsPassport {
  documentInfo: DocumentInfo;
  printingPreferences: PrintingPreferences;
  learnerInfo: LearnerInfo;
}
