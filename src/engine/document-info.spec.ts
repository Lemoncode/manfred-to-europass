import { create } from "xmlbuilder2";
import * as model from "models/europass";
import { rootNodeNames } from "./nodes.const";
import { generateDocumentInfoElement } from "./document-info.engine";
import { parseISO8601Date, trimSpacesAndRemoveMultiline } from "@/testing";

describe("Document Info", () => {
  it.only("Should generate a DocumentInfo when all fields are informed", () => {
    // Arrange
    const creationDate = new Date("2013-07-01T07:18:01.579Z");
    const updateDate = new Date("2013-07-01T07:18:01.579Z");

    const documentInfo: model.DocumentInfo = {
      documentType: "ECV",
      creationDate: creationDate,
      lastUpdateDate: updateDate,
      xsdVersion: "3.0",
      generator: "EWA",
      comment: "Europass CV",
    };

    const expectedXml = `
     <?xml version="1.0"?>
      <SkillsPassport>
        <DocumentInfo>
          <DocumentType>ECV</DocumentType>
          <CreationDate>${creationDate.toISOString()}</CreationDate>
          <LastUpdateDate>${updateDate.toISOString()}</LastUpdateDate>
          <XSDVersion>3.0</XSDVersion>
          <Generator>EWA</Generator>
          <Comment>Europass CV</Comment>
        </DocumentInfo>
      </SkillsPassport>
    `;
    const singleLineExpectedResult = trimSpacesAndRemoveMultiline(expectedXml);

    const rootInfo = create({});

    const skillsNode = rootInfo.ele(rootNodeNames.SkillsPassport);

    // Act
    generateDocumentInfoElement(skillsNode, documentInfo);
    const xml = rootInfo.end();
    console.log(xml);

    // Assert
    expect(xml).toBe(singleLineExpectedResult);
  });
});
