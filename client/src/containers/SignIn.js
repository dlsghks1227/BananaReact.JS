import React, { useState } from 'react';
import {
    TextField,
    Avatar,
    createMuiTheme,
    ThemeProvider,
    Button,
} from '@material-ui/core';

// CSS
import './Containers.scss';

// API
import { 
    useStyle,
    login,
 } from '../api/api';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(255,105,135)',
        },
    }
});

export default function Signin() {
    const classes = useStyle();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    return (
        <div className='container'>
            <div className='items'>
                <Avatar></Avatar>
                <form onSubmit={(event) => login(event, email, password)} autoComplete='off'>
                    <ThemeProvider theme={theme}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            //autoComplete='email'
                            autoFocus
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}/>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            name='password'
                            type='password'
                            //autoComplete='current-password'
                            onChange={(event)=>{setpassword(event.target.value)}}/>
                    </ThemeProvider>
                    <Button
                        type='submit'
                        className={classes.button}>
                    Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

// form 삭제 후
// Button에서 type 설정하지 말고 onClick={()=>login(email, password)} 으로도 가능