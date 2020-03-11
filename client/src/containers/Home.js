import React from 'react';
import {
    Box,
    Grid,
    Container,
    CssBaseline,
    makeStyles,
    TextField,
    Button,
    Avatar,
    Typography,
    FormControlLabel,
    Checkbox,
    Link,
} from '@material-ui/core';

// Components

// CSS
const useStyle = () => makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class Home extends React.Component {
    render() {
        return (
            <Container component='main' maxWidth='xs'>
                <CssBaseline/>
                <div className={useStyle.paper}>
                    <Avatar className={useStyle.avatar}></Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <form className={useStyle.form} noValidate method='post'>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus/>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            name='password'
                            type='password'
                            autoComplete='current-password'/>
                        <FormControlLabel
                            control={<Checkbox value='remember' color='primary'/>}
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={useStyle.submit}>
                            Sign in
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
            // <div>
            //     <Link to='/test' className='button'>
            //         <Button variant='contained' color='primary'>Test</Button>
            //     </Link>
            // </div>
        );
    }
}

export default Home;