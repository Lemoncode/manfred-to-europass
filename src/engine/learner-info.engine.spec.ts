import { create } from "xmlbuilder2";
import * as model from "models/europass";
import { rootNodeNames } from "./nodes.const";
import { trimSpacesAndRemoveMultiline } from "@/testing";
import { generateLearnerInfoElement } from "./learner-info.engine";

describe("Learner Info", () => {
  it("Should generate a LearnerInfo when all fields are informed", () => {
    // Arrange

    const learnerInfo: model.LearnerInfo = {
      identification: {
        contactInfo: null,
        demographics: null,
        personName: {
          firstName: "John",
          surName: "Smith",
        },
      },
      workExperienceList: null,
      skills: null,
    };

    const expectedXml = `
     <?xml version="1.0"?>
      <SkillsPassport>
        <LearnerInfo>
            <identification>
                <PersonName>
                    <FirstName>John</FirstName>
                    <Surname>Smith</Surname>
                </PersonName>
            </identification>
            <WorkExperienceList/>
            <Skills/>
            </LearnerInfo>
      </SkillsPassport>
    `;
    const singleLineExpectedResult = trimSpacesAndRemoveMultiline(expectedXml);

    const rootInfo = create({});

    const skillsNode = rootInfo.ele(rootNodeNames.SkillsPassport);

    // Act
    generateLearnerInfoElement(skillsNode, learnerInfo);
    const xml = rootInfo.end();
    console.log(xml);

    // Assert
    expect(xml).toBe(singleLineExpectedResult);
  });
});
