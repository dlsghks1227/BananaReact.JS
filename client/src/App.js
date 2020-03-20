import React from 'react';

// Components
import Header from './components/Header'
import Components from './components/Index'
import Footer from './components/Footer'

// CSS
import './App.scss';

// --------------------------------
export default function App() {
    return (
        <div className='root'>
            <Header/>
            <Components/>
            <Footer/>
        </div>
    );
};