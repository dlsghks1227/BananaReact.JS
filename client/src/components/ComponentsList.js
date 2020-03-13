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
            <div className='list'>
                <div className='buttons'>
                <h2>List</h2>
                { this.props.container.map( container =>(
                    <Link key={container.id} to={container.path} className='button'>
                      <Button className='button' variant='contained' color='primary'>{container.component.name}</Button>
                    </Link>
                ))}
                </div>
            </div>
        );
    }
}

export default ComponentsList;