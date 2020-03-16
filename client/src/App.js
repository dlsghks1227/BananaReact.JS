import React from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Header from './components/Header'
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import page404 from './containers/page404';
import Containerslist from './containers/Containerslist'

// CSS
import './App.scss';

// --------------------------------
const customHistory = createBrowserHistory();

const containers = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home,
    },
    {
        id: 2,
        path: '/SignIn',
        exact: false,
        component: SignIn,
    },
    {
        id: 3,
        path: '/Test',
        exact: false,
        component: Test,
    },
    {
        id: 404,
        path: '/404',
        exact: false,
        component: page404,
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
        };
    }

    async componentDidMount() {
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {
        return(
            <div className='root'>
                <Header timer={this.state.date.toLocaleTimeString()}/>
                <div className='row'>
                    <Router history={customHistory}>
                        <Containerslist container = {containers}/>
                        <Switch>
                        {
                            containers.map( container => (
                                <Route
                                    key={container.id}
                                    exact={container.exact}
                                    path={container.path}
                                    component={container.component}
                                />
                                ))
                            }
                            <Route render = {() => (
                                <div className='container'>
                                    <Redirect to='/404'/>
                                </div>
                            )}>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}