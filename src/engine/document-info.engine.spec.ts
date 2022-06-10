import { generateDocumentInfoElement } from "./document-info.engine";
import { RootInfo } from "./engine.model";
import { rootNodeNames } from "./nodes.const";

const generateDummyRootXmlDocument = (): RootInfo => {
  const seedXml = "<root></root>";

  var parser = new DOMParser();
  const xmlDocument = parser.parseFromString(seedXml, "application/xml");

  return {
    document: xmlDocument,
    root: xmlDocument.getRootNode(),
  };
};

describe("document.info.engine", () => {
  it(`When Empty DocumentInfo should return
    <DocumentInfo/>
  `, () => {
    // Arrange
    const dummyRootInfo = generateDummyRootXmlDocument();

    // Act
    const documentInfoElement = generateDocumentInfoElement(dummyRootInfo);

    // Assert
    expect(documentInfoElement.nodeName).toBe(rootNodeNames.DocumentInfo);
  });
});
