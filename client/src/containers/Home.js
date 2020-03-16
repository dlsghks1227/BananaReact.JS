import React from 'react';
import {
    Button,
} from '@material-ui/core';

// CSS
import './Containers.scss'

class Home extends React.Component {
    test = (e) => {
        fetch('users/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bana : 'asd',
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <div className='container'>
                <div className='items'>
                    <form onSubmit={this.test}>
                        <Button type='submit'>Test</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;