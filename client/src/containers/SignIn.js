import React from 'react';
import {
    TextField,
    Avatar,
} from '@material-ui/core';

class SignIn extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='item'>
                    <Avatar></Avatar>
                    <form>
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
                    </form>
                </div>
            </div>
        );
    }
}

//              <CssBaseline/>
//                 <div className={useStyle.paper}>
//                     <Avatar className={useStyle.avatar}></Avatar>
//                     <Typography component='h1' variant='h5'>
//                         Sign in
//                     </Typography>
//                     <form className={useStyle.form} noValidate method='post'>
//                         <TextField
//                             variant='outlined'
//                             margin='normal'
//                             required
//                             fullWidth
//                             id='password'
//                             label='Password'
//                             name='password'
//                             type='password'
//                             autoComplete='current-password'/>
//                         <FormControlLabel
//                             control={<Checkbox value='remember' color='primary'/>}
//                             label='Remember me'
//                         />
//                         <Button
//                             type='submit'
//                             fullWidth
//                             variant='contained'
//                             color='primary'
//                             className={useStyle.submit}>
//                             Sign in
//                         </Button>
//                     </form>
//                 </div>
//                 <Box mt={8}>
//                 </Box>

export default SignIn;