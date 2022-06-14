import * as model from "models/europass";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

export const generatePrintingPreferences = (rootInfo: RootInfo) => {
  // LearnerInfo
  const printingPreferencesNode = rootInfo.root.ele(
    rootNodeNames.PrintingPreferences
  );
};
