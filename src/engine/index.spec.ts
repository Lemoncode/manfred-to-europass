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
    expect(result).toBe(`<SkillsPassport xmlns=\"http://europass.cedefop.europa.eu/Europass\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/EuropassSchema_V3.0.xsd\" locale=\"en\"/>`);
  });
});
