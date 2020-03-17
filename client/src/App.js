import React, { useState } from 'react';

// Components
import Header from './components/Header'
import Components from './components/Index'

// CSS
import './App.scss';

// --------------------------------
export default function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    
    return (
        <div className='root'>
            <Header/>
            <Components authenticated={authenticated}/>
        </div>
    );
};