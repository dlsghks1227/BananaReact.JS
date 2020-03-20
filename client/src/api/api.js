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

    const res = await fetch(url, options);
    const resOK = res && res.status === 200;
    var user = null;
    if(resOK) {
        var data = await res.json();
        console.log(data.success);
    }
    return user;
};