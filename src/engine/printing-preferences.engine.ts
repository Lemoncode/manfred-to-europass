import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { rootNodeNames } from "./nodes.const";

export const generatePrintingPreferences = (
  rootInfo: XMLBuilder,
  printingPreferences
) => {
  // LearnerInfo
  const printingPreferencesNode = rootInfo.ele(
    rootNodeNames.PrintingPreferences
  );
};
