import {
    DocumentInfo,
    PrintingPreferences,
    SkillsPassport,
} from "@/models/europass";
import { LearnerInfo } from "@/models/europass/learnerInfo";
import { Identification } from "@/models/europass/learnerInfo/identification.model";
import { ManfredAwesomicCV } from "@/models/manfred";

const mapManfredToEuropass = (cv: ManfredAwesomicCV): SkillsPassport => ({
    documentInfo: generateEuropassDocumentInfo(),
    printingPreferences: generateEuropassPrintingPreferences(),
    learnerInfo: generateEuropassLearnerInfo(cv),
});

const generateEuropassDocumentInfo = (): DocumentInfo => ({
    documentType: "ECV",
    creationDate: new Date(Date.now()),
    lastUpdateDate: new Date(Date.now()),
    xsdVersion: "V3.0",
    generator: "EWA",
    comment: "Europass CV",
});

const generateEuropassPrintingPreferences = (): PrintingPreferences => ({
    type: "",
});

const generateEuropassLearnerInfo = (cv: ManfredAwesomicCV): LearnerInfo => ({
    identification: generateIdentification(cv),
    workExperienceList: [], // external function
    skills: [], // external function
});

const generateIdentification = (cv: ManfredAwesomicCV): Identification => ({
    personName: generatePersonName(cv.aboutMe.profile),
    contactInfo: {
        address: {
            addressLine: "",
            postalCode: "",
            municipallity: "",
            country: {
                label: "", // label: manfred.aboutMe.profile.location.notes
            },
        },
        email: {
            contact: "",
        },
    },
    demographics: {
        birthDate: new Date(cv.aboutMe.profile.birthday),
    },
});

const generatePersonName = (profile): Identification["personName"] => ({
    firstName: profile.name,
    surName: profile.surnames,
});

export const manfredCv = (cv: ManfredAwesomicCV) =>
    cv ? mapManfredToEuropass(cv) : null;
