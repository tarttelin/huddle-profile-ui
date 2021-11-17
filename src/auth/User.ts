import dayjs from 'dayjs';

export interface User {
    id: string,
    email: string,
    name: string,
    accessToken: string,
    idToken: string,
    claims: [string],
    isValid: () => boolean
}

export const createUser = (idToken: string, accessToken: string) => {
    let idData = JSON.parse(atob(idToken.split('.')[1]));
    return { 
        accessToken, 
        idToken, 
        id: idData.sub, 
        claims: idData["cognito:groups"] as [string], 
        email: idData.email, 
        name: idData.name,
        isValid: () => {
            return dayjs.unix(idData["exp"] as number).isAfter(dayjs());
        }
    } as User;
}

export const rehydrateUser = (persistedUser: string) => {
    const userJson = JSON.parse(persistedUser);
    return createUser(userJson["idToken"], userJson["accessToken"]);
}