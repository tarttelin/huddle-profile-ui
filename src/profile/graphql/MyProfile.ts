import gql from "graphql-tag";
import {CONSULTANT_FRAGMENT} from "./index";


export const Query = gql`
    query LoadConsultant {
        me {
            consultant {
                ...ConsultantProfile
            }
        }
    }
    ${CONSULTANT_FRAGMENT}
`