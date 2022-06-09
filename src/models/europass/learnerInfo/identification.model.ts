export interface Identification {
  personName: PersonName;
  contactInfo: ContactInfo;
  demographics: Demographics;
}

interface PersonName {
  firstName: string;
  surName: string;
}

interface ContactInfo {
  address: Address;
  email: EMail;
}

interface Address {
  addressLine: string;
  postalCode: string;
  municipallity: string;
  country: Country;
}

interface Country {
  label: string;
}

interface EMail {
  contact: string;
}

interface Demographics {
  birthDate: Date;
}
