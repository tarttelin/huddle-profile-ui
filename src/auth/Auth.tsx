import React, {useEffect} from 'react';
import { Redirect } from 'wouter';
import { User } from './User';

export const USER_KEY = 'user_auth';

export const loadUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : undefined;
}

const persistUser = (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

type AuthProps = {
    user: User | undefined
    setUser: (user: User) => void
}

const Auth: React.FC<AuthProps> = ({ user, setUser }) => {
    useEffect( () => {
        if (!user) {
            let args = window.location.hash.substring(1);
            let accessToken = new URLSearchParams(args).get('access_token');
            let idToken = new URLSearchParams(args).get('id_token');
            if (idToken && accessToken) {
                let idData = JSON.parse(atob(idToken.split('.')[1]));
                const user = { accessToken, idToken, id: idData.sub, claims: idData["cognito:groups"] as [string], email: idData.email, name: idData.name } as User;
                persistUser(user);
                setUser(user);
            } 
        }
    }, [user]);
    if (user) {
        return (<Redirect to="/home" />);
    }

    return (<span>Redirecting to login ...</span>);
};

export default Auth;