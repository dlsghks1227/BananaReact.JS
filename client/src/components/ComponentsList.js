import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  import {
    Button,
} from '@material-ui/core';

class ComponentsList extends React.Component {
    render() {
        return (
            <div className='box'>
                <div className='buttons'>
                <h1>List</h1>
                { this.props.container.map( container =>(
                    <Link key={container.id} to={container.path} className='button'>
                      <Button  variant='contained' color='primary'>{container.component.name}</Button>
                    </Link>
                ))}
                </div>
            </div>
        );
    }
}

export default ComponentsList;