import React, { useState } from 'react';
import {
    Redirect,
    useLocation,
} from 'react-router-dom';
import {
    TextField,
    Avatar,
    createMuiTheme,
    ThemeProvider,
    Button,
} from '@material-ui/core';

// API
import { useAuth } from "../../api/api";

// CSS
import '../Containers.scss';

// API
import { 
    useStyle,
 } from '../../api/api';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(255,105,135)',
        },
    }
});

export default function Login() {
    const auth = useAuth();
    const classes = useStyle();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleClick = () => {
        auth.login({email, password});
    }

    const { from } = location.state || { from: { pathname:'/'}};
    if(auth.user) return <Redirect to={from}/>;

    return (
        <div className='container'>
            <div className='items'>
                <Avatar></Avatar>
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
                            onChange={(event) => {setEmail(event.target.value)}}/>
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
                            value={password}
                            onChange={(event) => {setpassword(event.target.value)}}/>
                    </ThemeProvider>
                    <Button
                        className={classes.button}
                        onClick={handleClick}>
                        Login
                </Button>
            </div>
        </div>
    );
};

// form 삭제 후
// Button에서 type 설정하지 말고 onClick={()=>login(email, password)} 으로도 가능