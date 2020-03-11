import React from 'react';
import { Redirect } from 'react-router';

class Test extends React.Component {
    render() {
        return (
            <Redirect to={{
                pathname: '/asd',
            }}></Redirect>
        );
    }
}

export default Test;