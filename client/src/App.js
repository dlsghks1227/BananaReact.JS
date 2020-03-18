import React, { useState } from 'react';

// Components
import Header from './components/Header'
import Components from './components/Index'
import Footer from './components/Footer'

// CSS
import './App.scss';

// API
import { 
    Userlogin,
} from './api/api';

// --------------------------------
export default function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({email, password}) => {setUser(Userlogin({email, password}))};
    const logout = () => {setUser(null)};
    
    return (
        <div className='root'>
            <Header/>
            <Components
                authenticated={authenticated}
                login={login}
                logout={logout}
            />
            <Footer/>
        </div>
    );
};