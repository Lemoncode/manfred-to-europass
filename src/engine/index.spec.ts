import { generateSkillsPassport } from "./index";
import * as model from "models/europass";

describe("Index Element Root", () => {
  xit(`When an empty structure is provide it should return the following XMLWriter

    <SkillsPassport></SkillsPassport>
  `, () => {
    // Arrange
    const emptySkills: model.SkillsPassport = {
      documentInfo: null,
      printingPreferences: null,
      learnerInfo: null,
    };

    // Act
    const result = generateSkillsPassport(emptySkills);

    // Assert
    expect(result).toBe(
      `<SkillsPassport xmlns=\"http://europass.cedefop.europa.eu/Europass\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd\" locale=\"en\"/>`
    );
  });

  it(`When documentInfo is informed XML should be
  <SkillsPassport>
    <DocumentInfo/>
  </SkillsPassport>
  `, () => {
    // TODO: Go Felix Go
    // Arrange
    const emptyDocInfo: model.DocumentInfo = {
      documentType: null,
      creationDate: null,
      lastUpdateDate: null,
      xsdVersion: null,
      generator: null,
      comment: null,
    };
    const SkillsWithEmptyDocInfo: model.SkillsPassport = {
      documentInfo: emptyDocInfo,
      printingPreferences: null,
      learnerInfo: null,
    };

    // Act
    const result = generateSkillsPassport(SkillsWithEmptyDocInfo);
    // Assert
    expect(result).toBe(
      '<SkillsPassport xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"><DocumentInfo/></SkillsPassport>'
    );
  });
});
