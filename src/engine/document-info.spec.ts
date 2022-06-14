import { create } from "xmlbuilder2";
import * as model from "models/europass";
import { rootNodeNames } from "./nodes.const";
import { generateDocumentInfoElement } from "./document-info.engine";

// Create a functiona that will remove all the beginning spaces from a multiline string
const removeBeginningSpaces = (multiline: string): string => {
  const lines = multiline.split("\n");
  const trimmedLines = lines.map((line) => line.trim());
  return trimmedLines.join("");
};

// Create a function that will accept as input parameter a multiline string and will return a string that will display all in one line
const multilineToSingleline = (multiline: string): string => {
  return multiline.replace(/\n/g, " ");
};

const removeBegginingSpacesAndNewLines = (multiline: string): string => {
  const linesNoSpaces = removeBeginningSpaces(multiline);

  return multilineToSingleline(linesNoSpaces);
};

describe("Document Info", () => {
  it.only("Should generate a DocumentInfo when all fields are informed", () => {
    // Arrange
    const expectedXml = `
     <?xml version="1.0"?>
      <SkillsPassport>
        <DocumentInfo>
          <DocumentType>ECV</DocumentType>
          <CreationDate>2013-07-01T07:18:01.579Z</CreationDate>
          <LastUpdateDate>2013-07-01T07:18:01.579Z</LastUpdateDate>
          <XSDVersion>3.0</XSDVersion>
          <Generator>EWA</Generator>
          <Comment>Europass CV</Comment>
        </DocumentInfo>
      </SkillsPassport>
    `;
    const singleLineExpectedResult =
      removeBegginingSpacesAndNewLines(expectedXml);

    const rootInfo = create({});

    const skillsNode = rootInfo.ele(rootNodeNames.SkillsPassport);

    // Act
    generateDocumentInfoElement(skillsNode);
    const xml = rootInfo.end();
    console.log(xml);

    // Assert
    expect(xml).toBe(singleLineExpectedResult);
  });
});
