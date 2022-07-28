import {env} from "../support/utils";

export const user_login = env("ADMIN_USERNAME");
export const user_pass = env("ADMIN_PASSWORD");
export const test_participant = "Email,MobilePhone,ParticipantIdentifier,FirstName,MiddleName,LastName,DOB,Gender,PreferredLanguage,Street1,Street2,City,State,PostalCode,SecondaryIdentifier\n" +
    "jdoe@example.com,555-555-5555,1234593889238,John,James,Doe,4/15/1965,M,en,123 Main St,Apt A,Sacramento,CA,95814,ABC123"