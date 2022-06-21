
import { mapFromModelToEuropass } from "@/mappers/manfred-to-europass.mapper";
import * as baseModel from '@/models/manfred'
import * as finalModel from '@/models/europass'

describe("mapper.tests", () => {
  it(`should return empty object when it feeds a cv which equals to undefined
  `, () => {

    // Arrange
    const dummyCv: baseModel.ManfredAwesomicCV = undefined

    // Act
    const result: finalModel.SkillsPassport = mapFromModelToEuropass(dummyCv);

    // Assert
    expect(result).toStrictEqual({})
  });

  it(`should return empty object when it feeds a cv which equals to null
  `, () => {

    // Arrange
    const dummyCv: baseModel.ManfredAwesomicCV = null

    // Act
    const result: finalModel.SkillsPassport = mapFromModelToEuropass(dummyCv);

    // Assert
    expect(result).toStrictEqual({})
  });

  it(`When it feeds a string name and surnames, it returns same string on FirstName and SurName
  `, () => {

    // Arrange
    const dummyCv: baseModel.ManfredAwesomicCV = {
      settings: { language: 'english' },
      aboutMe: { profile: { name: "Manfred", surnames: "Awesomic", title: 'Sr' } }
    };

    // Act
    const result: finalModel.SkillsPassport = mapFromModelToEuropass(dummyCv);
    const path = result.learnerInfo.identification;

    // Assert
    expect(path.personName.firstName).toBe('Manfred');
    expect(path.personName.surName).toBe('Awesomic');
  });

  it(` When it feeds null values on name and surname, it returns null values on firstName and surName
  `, () => {
    // Arrange
    const dummyCv: baseModel.ManfredAwesomicCV = {
      settings: { language: null },
      aboutMe: { profile: { name: null, surnames: null, title: null } }
    };

    // Act
    const result: finalModel.SkillsPassport = mapFromModelToEuropass(dummyCv);
    const path = result.learnerInfo.identification;

    // Assert
    expect(path.personName.firstName).toBe(null);
    expect(path.personName.surName).toBe(null);

  });
});

