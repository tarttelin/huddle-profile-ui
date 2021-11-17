import gql from 'graphql-tag';


export const COMPANY_FRAGMENT = gql`
    fragment AssociateCompany on CompanyInfo {
        id
        name
        vatNumber
        companyEmailAddress
        companyAddress
        bankAccount {
            accountName
            accountNumber
            sortCode
        }
        statementsOfWork {
            startDate
            endDate
            rate {
                currency
                unitRate
                unit
                taxRate
            }
        }
    }
`


export const CONSULTANT_FRAGMENT = gql`
    fragment ConsultantProfile on Consultant {
        id
        __typename
        fullName {
            firstName
            lastName
        }
        contacts {
            address
            consultantEmail
            githubUser
            mobilePhone
            personalEmail
            slackUser
        }
        ...on AssociateConsultant {
            companyInfo {
                ...AssociateCompany
            }
        }
    }
    ${COMPANY_FRAGMENT}
`;
