import { SkillsPassport } from "@/models/europass"
import { ManfredAwesomicCV } from "@/models/manfred"


export const manfredToEuropass = (manfred: ManfredAwesomicCV): SkillsPassport => {
    const europass: SkillsPassport = {
        documentInfo: {
            documentType: 'ECV',
            creationDate: new Date(Date.now()),
            lastUpdateDate: new Date(Date.now()),
            xsdVersion: 'V3.0',
            generator: 'EWA',
            comment: 'Europass CV'
        },
        printingPreferences: {
            type: ''
        },
        learnerInfo: {
            identification:
            {
                personName:
                {
                    firstName: manfred.aboutMe.profile.name,
                    surName: manfred.aboutMe.profile.surnames
                },
                contactInfo: {
                    address: {
                        addressLine: '',
                        postalCode: '',
                        municipallity: '',
                        country: {
                            label: ''// label: manfred.aboutMe.profile.location.notes
                        }
                    },
                    email: {
                        contact: '',
                    },
                },
                demographics: {
                    birthDate: new Date(manfred.aboutMe.profile.birthday),
                }
            },
            workExperienceList: [], // external function
            skills: [], // external function
        },
    }
    return europass;
}


export const mapFromModelToEuropass = (cv: ManfredAwesomicCV) =>
    cv ? manfredToEuropass(cv) : {};
