import * as model from "models/europass";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";

export const generateIdentificationElement = (
  rootInfo: XMLBuilder,
  identification: model.Identification
) => {
  // LearnerInfo
  const identificationNode = rootInfo.ele("Identification");

  // PersonName
  const personName = identificationNode.ele("PersonName");
  personName.ele("FirstName").txt(identification.personName.firstName);
  personName.ele("Surname").txt(identification.personName.surName);

  // ContactInfo
  if (identification.contactInfo) {
    const contactInfo = identificationNode.ele("ContactInfo");
    const address = contactInfo.ele("Address");
    address
      .ele("AddressLine")
      .txt(identification.contactInfo.address.addressLine);
    address
      .ele("PostalCode")
      .txt(identification.contactInfo.address.postalCode);
    address
      .ele("Municipality")
      .txt(identification.contactInfo.address.municipallity);
    const country = address.ele("Country");
    country.ele("Label").txt(identification.contactInfo.address.country.label);

    const email = contactInfo.ele("Email");
    email.ele("contact").txt(identification.contactInfo.email.contact);
  }
  // Demographics
  if (identification.demographics) {
    const demographics = identificationNode.ele("Demographics");
    // Según la documentación, tiene tres atributos, día, mes y año donde año es obligatorio.
    // La duda es que como en nuestro caso, siempre recibe una completa, los ponemos?
    demographics
      .ele("Birthdate")
      .txt(identification.demographics.birthDate.toISOString());
  }
};
