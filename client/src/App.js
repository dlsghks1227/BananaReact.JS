import React from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import page404 from './containers/page404'
import ComponentsList from './components/ComponentsList'

// CSS
import './App.scss';

// --------------------------------
const customHistory = createBrowserHistory();

// function AuthRoute({ authenticated, component: Component, render, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={props => authenticated ? (
//                 render ? render(props) : <Button {...props}/>
//             ) : (
//                 <div/>
//             )
//             }
//         />
//     );
// }

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
        id: 404,
        path: '/404',
        exact: false,
        component: page404,
    }
]

class App extends React.Component {
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
                <div className='header'>
                    <h1>지금은 {this.state.date.toLocaleTimeString()}</h1>
                </div>
                <div className='row'>
                    <Router history={customHistory}>
                        <ComponentsList container = {containers}/>
                        <Switch>
                        {
                            containers.map( container => (
                                <Route
                                key = {container.id}
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

export default App;