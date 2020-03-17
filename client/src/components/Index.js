import React from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import AuthRouter from './AuthRouter';

// Containers
import Containerslist from '../containers/Containerslist'

// public
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import page404 from '../containers/Page404';

// private
import Profile from '../containers/PrivatePage/Profile';

// CSS
import './Components.scss'

const customHistory = createBrowserHistory();

export default function Components(props) {
    const containers = [
        {
            id: 1,
            path: '/',
            exact: true,
            component: Home,
        },
        {
            id: 2,
            path: '/Signin',
            exact: false,
            component: Signin,
        },
        {
            id: 404,
            path: '/404',
            exact: false,
            component: page404,
        },
    ]

    const authcontainers = [
        {
            id: 1,
            path: '/profile',
            exact: true,
            component: Profile,
        },
    ]

    return (
        <div className='row'>
            <Router history={customHistory}>
                <Containerslist container={containers} authcontainer={authcontainers}/>
                <Switch>
                    {
                        containers.map(container => (
                            <Route
                                key={container.id}
                                exact={container.exact}
                                path={container.path}
                                component={() => container.component()}
                            />
                        ))
                    }
                    {
                        authcontainers.map(authcontainer => (
                            <AuthRouter
                                key={authcontainer.id}
                                authenticated={props.authenticated}
                                exact={authcontainer.exact}
                                path={authcontainer.path}
                                component={() => authcontainer.component()}
                            />
                        ))
                    }
                    <Route render={()=>(<Redirect to='/404'/>)}/>
                </Switch>
            </Router>
        </div>
    );
}