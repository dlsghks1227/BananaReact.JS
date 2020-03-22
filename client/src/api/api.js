import React, { createContext, useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
    button : {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: '100%',
        margin: '0.3rem 0'
    }
});

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
}

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('/getinfo');
                const data = await response.json();
                if(response.ok && response.status === 200 && data.success === true) {
                    setUser({ userinfo : data.userinfo });
                }
            } catch(err) {
                console.log(err);
            }
        }
        
        fetchData();
    }, []);


    const login = async({email, password}) => {
        const url = '/login';
        const options = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                email : email,
                password: password
            })
        }
        
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if(response.ok && response.status === 200 && data.success === true) {
                setUser({ userinfo : data.userinfo });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const logout = async() => {
        try {
            const response = await fetch('/logout');
            const data = await response.json();

            if(response.ok && response.status === 200 && data.success === true) {
                setUser(null);
            }
        } catch(err) {
            console.log(err);
        }
    }

    return {
        user,
        login,
        logout,
    }
}