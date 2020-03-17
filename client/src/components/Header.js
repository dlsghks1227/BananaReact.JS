import React from 'react';


import './Components.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date : new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(
            <div className='header'>
                <h1>지금은 {this.state.date.toLocaleTimeString()} 입니다.</h1>
            </div>
        );
    };
};