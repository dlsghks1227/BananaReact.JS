import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom'

// API
import { useAuth } from "../api/api";

export default function AuthRoute({component : Component, render, ...rest}) {
    const auth = useAuth();
    
    return (
        <Route
            {...rest}
            render={props=>
                auth.user ? (
                    render ? render(props) : <Component {...props}/>
                ) : (
                    <Redirect
                        to={{
                            pathname:'/Signin',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}