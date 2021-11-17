import React, {useEffect} from 'react';
import { Redirect } from 'wouter';
import { User, rehydrateUser, createUser } from './User';
import dayjs from 'dayjs';

export const USER_KEY = 'user_auth';

export const loadUser = () => {
    const persistedUser = localStorage.getItem(USER_KEY);
    const user  = persistedUser ? rehydrateUser(persistedUser) : undefined;
    if (user && user.isValid()) return user;
    return undefined;
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
                const user = createUser(idToken, accessToken);
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