import React, { useState } from 'react';
import {
    TextField,
    Avatar,
    createMuiTheme,
    ThemeProvider,
    Button,
} from '@material-ui/core';

// CSS
import './Containers.scss'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(255,105,135)',
        },
    }
});

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const url = "/users/account/";

    const login = async(e) => {
        e.persist();
        e.preventDefault();
        
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
            })
        }
        const response = await fetch(url, options);
    }

    return (
        <div className='container'>
            <div className='items'>
                <Avatar></Avatar>
                <form onSubmit={login}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            onChange={(target)=>setEmail(target.value)}/>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            onChange={(target)=>setpassword(target.value)}/>
                    </ThemeProvider>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                    Login
                    </Button>
                </form>
            </div>
        </div>
    );
};