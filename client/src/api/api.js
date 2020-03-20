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
            if(response.ok && response.status === 200) {
                const data = await response.json();
                if(data.success === true) {
                    setUser({
                        email : email,
                        password: password
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    const logout = () => {
        setUser(null);
    }

    useEffect(() => {
        setUser(null);
    }, []);

    return {
        user,
        login,
        logout,
    }
}

export const Userlogin = async({email, password}) => {
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
        console.log(await response.text());


    } catch (err) {
        console.log(err);
    }
    // const resOK = res && res.status === 200;
    // var user = null;
    // if(resOK) {
    //     var data = await res.json();
    //     console.log(data.success);
    // }
};