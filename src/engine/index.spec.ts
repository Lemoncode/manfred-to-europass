import { generateSkillsPassport } from "./index";
import * as model from "models/europass";

describe("Index Element Root", () => {
  it(`When an empty structure is provide it should return the following XMLWriter

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
      `<?xml version=\"1.0\"?><SkillsPassport xmlns=\"http://europass.cedefop.europa.eu/Europass\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd\" locale=\"en\"/>`
    );
  });

  it(`When documentInfo is informed XML should be
  <SkillsPassport>
    <DocumentInfo>
    </DocumentInfo>
  </SkillsPassport>
  `, () => {
    // TODO: Go Felix Go
    // Arrange
    const hardcoreDocInfo: model.DocumentInfo = {
      documentType: "ECV",
      creationDate: new Date(),
      lastUpdateDate: new Date(),
      xsdVersion: "3.0",
      generator: "EWA",
      comment: "Europass CV",
    };
    const SkillsWithEmptyDocInfo: model.SkillsPassport = {
      documentInfo: hardcoreDocInfo,
      printingPreferences: null,
      learnerInfo: null,
    };

    // Act
    const result = generateSkillsPassport(SkillsWithEmptyDocInfo);
    // Assert
    expect(result).toBe(
      '<?xml version="1.0"?><SkillsPassport xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"><DocumentInfo><DocumentType>ECV</DocumentType><CreationDate>2013-07-01T07:18:01.579Z</CreationDate><LastUpdateDate>2013-07-01T07:18:01.579Z</LastUpdateDate><XSDVersion>3.0</XSDVersion><Generator>EWA</Generator><Comment>Europass CV</Comment></DocumentInfo></SkillsPassport>'
    );
  });

  it(`When printingPreferences is informed XML should be
  <SkillsPassport>
    <PrintingPreferences>
    </PrintingPreferences>
  </SkillsPassport>
  `, () => {
    // TODO: Go Felix Go
    // Arrange
    const emptyPrintPreferences: model.PrintingPreferences = {
      type: null,
    };
    const SkillsWithEmptyDocInfo: model.SkillsPassport = {
      documentInfo: null,
      printingPreferences: emptyPrintPreferences,
      learnerInfo: null,
    };

    // Act
    const result = generateSkillsPassport(SkillsWithEmptyDocInfo);
    // Assert
    expect(result).toBe(
      '<?xml version="1.0"?><SkillsPassport xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"><PrintingPreferences/></SkillsPassport>'
    );
  });

  it(`When learnerInfo is informed XML should be
  <SkillsPassport>
    <learnerInfo>
    </learnerInfo>
  </SkillsPassport>
  `, () => {
    // TODO: Go Felix Go
    // Arrange
    const learnerInfo: model.LearnerInfo = {
      identification: {
        personName: {
          firstName: "John",
          surName: "Smith",
        },
        contactInfo: null,
        demographics: null,
      },
      workExperienceList: [],
      skills: [],
    };
    const SkillsWithEmptyDocInfo: model.SkillsPassport = {
      documentInfo: null,
      printingPreferences: null,
      learnerInfo: learnerInfo,
    };

    // Act
    const result = generateSkillsPassport(SkillsWithEmptyDocInfo);
    // Assert
    expect(result).toBe(
      '<?xml version="1.0"?><SkillsPassport xmlns="http://europass.cedefop.europa.eu/Europass" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd" locale="en"><LearnerInfo><Identification><PersonName><FirstName>John</FirstName><SurName>Smith</SurName></PersonName></Identification><WorkExperienceList/><Skills/></LearnerInfo></SkillsPassport>'
    );
  });
});
