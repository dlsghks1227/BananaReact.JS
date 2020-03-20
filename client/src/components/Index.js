import React from 'react';
import {
    Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ProvideAuth } from "../api/api";

// Components
import AuthRouter from './AuthRouter';

// Containers
import Containerslist from '../containers/Containerslist'

// public
import Home from '../containers/Home';
import Login from '../containers/User/Login';
import Page404 from '../containers/Page404';
import Recommendform from '../containers/Recommendform';
import Dictionaryform from '../containers/Dictionaryform';
import Recipeform from '../containers/Recipeform';

// private
import Profile from '../containers/PrivatePage/Profile';

// CSS
import './Components.scss'

const customHistory = createBrowserHistory();

export default function Components() {
    const containers = [
        {
            path: '/',
            name: 'home',
            exact: true,
            component: () => Home(),
        },
        {
            path: '/recommend',
            name: 'recommend',
            exact: false,
            component: () => Recommendform(),
        },
        {
            path: '/dictionary',
            name: 'dictionary',
            exact: true,
            component: () => Dictionaryform(),
        },
        {
            path: '/recipe',
            name: 'recipe',
            exact: true,
            component: () => Recipeform(),
        },
        {
            path: '/404',
            name: '404',
            exact: false,
            component: () => Page404(),
        },
    ]

    const authcontainers = [
        {
            path: '/profile',
            name: 'profile',
            exact: false,
            component: () => Profile(),
        },
    ]

    return (
        <div className='row'>
            <ProvideAuth>
                <Router history={customHistory}>
                    <Containerslist
                        containers={containers}
                        authcontainers={authcontainers}/>
                    <Switch>
                        {
                            containers.map((container, index) => (
                                <Route
                                    key={index}
                                    exact={container.exact}
                                    path={container.path}
                                    component={container.component}
                                />
                            ))
                        }
                        {
                            authcontainers.map((authcontainer, index) => (
                                <AuthRouter
                                    key={index}
                                    exact={authcontainer.exact}
                                    path={authcontainer.path}
                                    component={authcontainer.component}
                                />
                                ))
                        }
                        <Route path='/Login' component={() => Login()}></Route>
                        <Route render={()=>(<Redirect to='/404'/>)}/>
                    </Switch>
                </Router>
            </ProvideAuth>
        </div>
    );
}