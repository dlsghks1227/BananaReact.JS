import React from 'react';

import './Header.scss';

export default function Header(props) {
    return (
        <div className='header'>
            <h1>지금은 {props.timer} 입니다.</h1>
        </div>
    );
}