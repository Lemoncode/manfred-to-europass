import { create } from "xmlbuilder2";
import * as model from "models/europass";
import { trimSpacesAndRemoveMultiline } from "@/testing";
import { rootNodeNames } from "../nodes.const";
import { generateIdentificationElement } from "./learner-info.identification";

describe("Identification", () => {
  it("Should generate a Identification when all fields are informed", () => {
    // Arrange
    const creationDate = new Date("2013-07-01T07:18:01.579Z");
    const updateDate = new Date("2013-07-01T07:18:01.579Z");

    const learnerInfo: model.Identification = {
      personName: {
        firstName: "John",
        surName: "Smith",
      },
      contactInfo: {
        address: {
          addressLine: "test address",
          postalCode: "test postal code",
          municipallity: "test municipality",
          country: {
            label: "test country",
          },
        },
        email: {
          contact: "Test email",
        },
      },
      demographics: {
        birthDate: creationDate,
      },
    };

    const expectedXml = `
       <?xml version="1.0"?>
        <SkillsPassport>
            <LearnerInfo>
		        <Identification>
			        <PersonName>
				        <FirstName>
					        John
				        </FirstName>
				        <Surname>
					        Smith
				        </Surname>
			        </PersonName>
                    <ContactInfo>
                        <Address>
                            <AddressLine>
                                test address
                            </AddressLine>
                            <PostalCode>
                                test postal code
                            </PostalCode>
                            <Municipality>
                                test municipality
                            </Municipality>
                            <Country>
                                <Label>
                                    test country
                                </Label>
                            </Country>
                        </Address>
                        <Email>
                            <contact>
                                Test email
                            </contact>
                        </Email>
                    </ContactInfo>
                    <Demographics>
                        <Birthdate>
                            2013-07-01T07:18:01.579Z
                        </Birthdate>
                    </Demographics>
                </Identification>
	</LearnerInfo>
        </SkillsPassport>
      `;
    const singleLineExpectedResult = trimSpacesAndRemoveMultiline(expectedXml);

    const rootInfo = create({});

    const skillsNode = rootInfo.ele(rootNodeNames.SkillsPassport);
    const learnerInfoNode = skillsNode.ele(rootNodeNames.LearnerInfo);

    // Act
    generateIdentificationElement(learnerInfoNode, learnerInfo);
    const xml = rootInfo.end();
    console.log(xml);

    // Assert
    expect(xml).toBe(singleLineExpectedResult);
  });
});
