import React from 'react';

// CSS
import '../Containers.scss'

// API
import { useAuth } from '../../api/api';

export default function Profile() {
    const auth = useAuth();

    return (
        <div className='container'>
            <div className='items'>
                {auth.user ?
                    <div>
                        <p>{auth.user.userinfo._id}</p>
                        <p>{auth.user.userinfo._email}</p>
                        <p>{auth.user.userinfo._name}</p>
                    </div> : ''}
            </div>
        </div>
    );
};