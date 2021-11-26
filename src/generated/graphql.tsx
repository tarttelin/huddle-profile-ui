import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddStatementOfWorkInput = {
  consultantId: Scalars['ID'];
  endDate: Scalars['String'];
  rate: RateInput;
  startDate: Scalars['String'];
};

export type Address = {
  __typename: 'Address';
  street: Scalars['String'];
};

export type AddressInput = {
  street: Scalars['String'];
};

export type AssociateCompanyBankAccount = {
  __typename: 'AssociateCompanyBankAccount';
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  sortCode: Scalars['String'];
};

export type AssociateConsultant = Consultant & Node & {
  __typename: 'AssociateConsultant';
  companyInfo: Maybe<CompanyInfo>;
  contacts: Contacts;
  fullName: Name;
  id: Scalars['ID'];
  users: Maybe<Array<UserConnection>>;
};

export enum BillingUnit {
  Day = 'Day',
  Hour = 'Hour'
}

export type CompanyInfo = {
  __typename: 'CompanyInfo';
  bankAccount: Maybe<AssociateCompanyBankAccount>;
  companyAddress: Maybe<Scalars['String']>;
  companyEmailAddress: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  statementsOfWork: Array<StatementOfWork>;
  vatNumber: Maybe<Scalars['String']>;
};

export type Consultant = {
  contacts: Contacts;
  fullName: Name;
  id: Scalars['ID'];
  users: Maybe<Array<UserConnection>>;
};

export type ConsultantConnection = {
  __typename: 'ConsultantConnection';
  items: Array<Consultant>;
  nextToken: Maybe<Scalars['String']>;
};

export type ConsultantContactsInput = {
  consultantEmail: Scalars['String'];
  githubUser: InputMaybe<Scalars['String']>;
  personalEmail: InputMaybe<Scalars['String']>;
  slackUser: InputMaybe<Scalars['String']>;
};

export type ConsultantNameInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Contacts = {
  __typename: 'Contacts';
  address: Maybe<Scalars['String']>;
  consultantEmail: Maybe<Scalars['String']>;
  githubUser: Maybe<Scalars['String']>;
  mobilePhone: Maybe<Scalars['String']>;
  personalEmail: Maybe<Scalars['String']>;
  slackUser: Maybe<Scalars['String']>;
};

export type CreateAssociateCompanyInput = {
  companyAddress: InputMaybe<Scalars['String']>;
  companyEmailAddress: InputMaybe<Scalars['String']>;
  consultantId: Scalars['ID'];
  name: Scalars['String'];
  vatNumber: InputMaybe<Scalars['String']>;
};

export type CreateConsultantInput = {
  contacts: ConsultantContactsInput;
  fullName: ConsultantNameInput;
  isPermanentStaff: InputMaybe<Scalars['Boolean']>;
};

export enum Currency {
  Aud = 'AUD',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type DeleteStatementOfWorkInput = {
  consultantId: Scalars['ID'];
  index: InputMaybe<Scalars['Int']>;
};

export type Invite = {
  __typename: 'Invite';
  consultantId: Scalars['ID'];
  expiryTime: Scalars['Int'];
  id: Scalars['ID'];
  inviteEmail: Scalars['String'];
};

export type InviteUser = {
  consultantId: Scalars['ID'];
  inviteEmail: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  addStatementOfWork: CompanyInfo;
  changeConsultantEmploymentStatus: Consultant;
  createAssociateCompany: CompanyInfo;
  createConsultant: Consultant;
  deleteStatementOfWork: CompanyInfo;
  sendInvite: Invite;
  updateAssociateCompany: CompanyInfo;
  updateAssociateCompanyBankAccount: CompanyInfo;
  updateConsultantContacts: Consultant;
  updateConsultantName: Consultant;
};


export type MutationAddStatementOfWorkArgs = {
  input: AddStatementOfWorkInput;
};


export type MutationChangeConsultantEmploymentStatusArgs = {
  input: UpdateConsultantIsPermanentStaff;
};


export type MutationCreateAssociateCompanyArgs = {
  input: CreateAssociateCompanyInput;
};


export type MutationCreateConsultantArgs = {
  input: CreateConsultantInput;
};


export type MutationDeleteStatementOfWorkArgs = {
  input: DeleteStatementOfWorkInput;
};


export type MutationSendInviteArgs = {
  input: InviteUser;
};


export type MutationUpdateAssociateCompanyArgs = {
  input: UpdateAssociateCompanyInput;
};


export type MutationUpdateAssociateCompanyBankAccountArgs = {
  input: UpdateAssociateCompanyBankAccountInput;
};


export type MutationUpdateConsultantContactsArgs = {
  input: UpdateConsultantContactsInput;
};


export type MutationUpdateConsultantNameArgs = {
  input: UpdateConsultantNameInput;
};

export type Name = {
  __typename: 'Name';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type PermanentStaff = Consultant & Node & {
  __typename: 'PermanentStaff';
  contacts: Contacts;
  fullName: Name;
  id: Scalars['ID'];
  users: Maybe<Array<UserConnection>>;
};

export type Query = {
  __typename: 'Query';
  allConsultants: Maybe<ConsultantConnection>;
  consultantByEmail: Maybe<Consultant>;
  consultantById: Maybe<Consultant>;
  me: User;
  userById: User;
};


export type QueryAllConsultantsArgs = {
  limit: InputMaybe<Scalars['Int']>;
  nextToken: InputMaybe<Scalars['String']>;
};


export type QueryConsultantByEmailArgs = {
  email: Scalars['String'];
};


export type QueryConsultantByIdArgs = {
  consultantId: Scalars['ID'];
};


export type QueryMeArgs = {
  cacheBust: InputMaybe<Scalars['String']>;
};


export type QueryUserByIdArgs = {
  userId: Scalars['ID'];
};

export type Rate = {
  __typename: 'Rate';
  currency: Scalars['String'];
  taxRate: Scalars['Float'];
  unit: BillingUnit;
  unitRate: Scalars['Float'];
};

export type RateInput = {
  currency: Currency;
  taxRate: Scalars['Float'];
  unit: BillingUnit;
  unitRate: Scalars['Float'];
};

export type StatementOfWork = {
  __typename: 'StatementOfWork';
  endDate: Maybe<Scalars['String']>;
  rate: Maybe<Rate>;
  startDate: Maybe<Scalars['String']>;
};

export type UpdateAssociateCompanyBankAccountInput = {
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  consultantId: Scalars['ID'];
  sortCode: Scalars['String'];
};

export type UpdateAssociateCompanyInput = {
  companyAddress: InputMaybe<Scalars['String']>;
  companyEmailAddress: InputMaybe<Scalars['String']>;
  consultantId: Scalars['ID'];
  name: Scalars['String'];
  vatNumber: InputMaybe<Scalars['String']>;
};

export type UpdateConsultantContactsInput = {
  address: InputMaybe<Scalars['String']>;
  consultantEmail: InputMaybe<Scalars['String']>;
  consultantId: Scalars['ID'];
  githubUser: InputMaybe<Scalars['String']>;
  mobilePhone: InputMaybe<Scalars['String']>;
  personalEmail: InputMaybe<Scalars['String']>;
  slackUser: InputMaybe<Scalars['String']>;
};

export type UpdateConsultantIsPermanentStaff = {
  consultantId: Scalars['ID'];
  isPermanentStaff: Scalars['Boolean'];
};

export type UpdateConsultantNameInput = {
  consultantId: Scalars['ID'];
  firstName: InputMaybe<Scalars['String']>;
  lastName: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename: 'User';
  consultant: Consultant;
  email: Scalars['String'];
  id: Scalars['ID'];
  username: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename: 'UserConnection';
  items: Array<User>;
  nextToken: Maybe<Scalars['String']>;
};

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename: 'Query', me: { __typename: 'User', consultant: { __typename: 'AssociateConsultant', id: string, companyInfo: { __typename: 'CompanyInfo', id: string, name: string, vatNumber: string | null, companyEmailAddress: string | null, companyAddress: string | null, bankAccount: { __typename: 'AssociateCompanyBankAccount', accountName: string, accountNumber: string, sortCode: string } | null, statementsOfWork: Array<{ __typename: 'StatementOfWork', startDate: string | null, endDate: string | null, rate: { __typename: 'Rate', currency: string, unitRate: number, unit: BillingUnit, taxRate: number } | null }> } | null, fullName: { __typename: 'Name', firstName: string, lastName: string }, contacts: { __typename: 'Contacts', address: string | null, consultantEmail: string | null, githubUser: string | null, mobilePhone: string | null, personalEmail: string | null, slackUser: string | null } } | { __typename: 'PermanentStaff', id: string, fullName: { __typename: 'Name', firstName: string, lastName: string }, contacts: { __typename: 'Contacts', address: string | null, consultantEmail: string | null, githubUser: string | null, mobilePhone: string | null, personalEmail: string | null, slackUser: string | null } } } };

export type AssociateCompanyFragment = { __typename: 'CompanyInfo', id: string, name: string, vatNumber: string | null, companyEmailAddress: string | null, companyAddress: string | null, bankAccount: { __typename: 'AssociateCompanyBankAccount', accountName: string, accountNumber: string, sortCode: string } | null, statementsOfWork: Array<{ __typename: 'StatementOfWork', startDate: string | null, endDate: string | null, rate: { __typename: 'Rate', currency: string, unitRate: number, unit: BillingUnit, taxRate: number } | null }> };

type ConsultantProfile_AssociateConsultant_Fragment = { __typename: 'AssociateConsultant', id: string, companyInfo: { __typename: 'CompanyInfo', id: string, name: string, vatNumber: string | null, companyEmailAddress: string | null, companyAddress: string | null, bankAccount: { __typename: 'AssociateCompanyBankAccount', accountName: string, accountNumber: string, sortCode: string } | null, statementsOfWork: Array<{ __typename: 'StatementOfWork', startDate: string | null, endDate: string | null, rate: { __typename: 'Rate', currency: string, unitRate: number, unit: BillingUnit, taxRate: number } | null }> } | null, fullName: { __typename: 'Name', firstName: string, lastName: string }, contacts: { __typename: 'Contacts', address: string | null, consultantEmail: string | null, githubUser: string | null, mobilePhone: string | null, personalEmail: string | null, slackUser: string | null } };

type ConsultantProfile_PermanentStaff_Fragment = { __typename: 'PermanentStaff', id: string, fullName: { __typename: 'Name', firstName: string, lastName: string }, contacts: { __typename: 'Contacts', address: string | null, consultantEmail: string | null, githubUser: string | null, mobilePhone: string | null, personalEmail: string | null, slackUser: string | null } };

export type ConsultantProfileFragment = ConsultantProfile_AssociateConsultant_Fragment | ConsultantProfile_PermanentStaff_Fragment;

export const AssociateCompanyFragmentDoc = gql`
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
    `;
export const ConsultantProfileFragmentDoc = gql`
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
  ... on AssociateConsultant {
    companyInfo {
      ...AssociateCompany
    }
  }
}
    ${AssociateCompanyFragmentDoc}`;
export const MyProfileDocument = gql`
    query MyProfile {
  me {
    consultant {
      ...ConsultantProfile
    }
  }
}
    ${ConsultantProfileFragmentDoc}`;

export function useMyProfileQuery(options: Omit<Urql.UseQueryArgs<MyProfileQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MyProfileQuery>({ query: MyProfileDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Address",
        "fields": [
          {
            "name": "street",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AssociateCompanyBankAccount",
        "fields": [
          {
            "name": "accountName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "accountNumber",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sortCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AssociateConsultant",
        "fields": [
          {
            "name": "companyInfo",
            "type": {
              "kind": "OBJECT",
              "name": "CompanyInfo",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "contacts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Contacts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fullName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Name",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Consultant"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CompanyInfo",
        "fields": [
          {
            "name": "bankAccount",
            "type": {
              "kind": "OBJECT",
              "name": "AssociateCompanyBankAccount",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "companyAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "companyEmailAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "statementsOfWork",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StatementOfWork",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "vatNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Consultant",
        "fields": [
          {
            "name": "contacts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Contacts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fullName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Name",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AssociateConsultant"
          },
          {
            "kind": "OBJECT",
            "name": "PermanentStaff"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ConsultantConnection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Consultant",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nextToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Contacts",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "consultantEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "githubUser",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobilePhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "personalEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slackUser",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Invite",
        "fields": [
          {
            "name": "consultantId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiryTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "inviteEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addStatementOfWork",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CompanyInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "changeConsultantEmploymentStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Consultant",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createAssociateCompany",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CompanyInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createConsultant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Consultant",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteStatementOfWork",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CompanyInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sendInvite",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Invite",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAssociateCompany",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CompanyInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAssociateCompanyBankAccount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CompanyInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateConsultantContacts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Consultant",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateConsultantName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Consultant",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Name",
        "fields": [
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AssociateConsultant"
          },
          {
            "kind": "OBJECT",
            "name": "PermanentStaff"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PermanentStaff",
        "fields": [
          {
            "name": "contacts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Contacts",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fullName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Name",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Consultant"
          },
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "allConsultants",
            "type": {
              "kind": "OBJECT",
              "name": "ConsultantConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "nextToken",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "consultantByEmail",
            "type": {
              "kind": "INTERFACE",
              "name": "Consultant",
              "ofType": null
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "consultantById",
            "type": {
              "kind": "INTERFACE",
              "name": "Consultant",
              "ofType": null
            },
            "args": [
              {
                "name": "consultantId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cacheBust",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "userById",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Rate",
        "fields": [
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "taxRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unitRate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StatementOfWork",
        "fields": [
          {
            "name": "endDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rate",
            "type": {
              "kind": "OBJECT",
              "name": "Rate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "consultant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INTERFACE",
                "name": "Consultant",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserConnection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nextToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;