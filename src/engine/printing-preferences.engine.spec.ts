import { create } from "xmlbuilder2";
import * as model from "models/europass";
import { rootNodeNames } from "./nodes.const";
import { trimSpacesAndRemoveMultiline } from "@/testing";
import { generatePrintingPreferences } from "./printing-preferences.engine";

describe("Learner Info", () => {
  it.only("Should generate a LearnerInfo when all fields are informed", () => {
    // Arrange

    const printingPreferences: model.PrintingPreferences = null;

    const expectedXml = `
     <?xml version="1.0"?>
      <SkillsPassport>
        <PrintingPreferences/>
      </SkillsPassport>
    `;
    const singleLineExpectedResult = trimSpacesAndRemoveMultiline(expectedXml);

    const rootInfo = create({});

    const skillsNode = rootInfo.ele(rootNodeNames.SkillsPassport);

    // Act
    generatePrintingPreferences(skillsNode, printingPreferences);
    const xml = rootInfo.end();
    console.log(xml);

    // Assert
    expect(xml).toBe(singleLineExpectedResult);
  });
});
