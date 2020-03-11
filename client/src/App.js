import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Home from './containers/Home';
import Test from './containers/Test';
import ComponentsList from './components/ComponentsList'

// CSS
import './App.scss';
import { Container, Button } from '@material-ui/core';

// --------------------------------
const customHistory = createBrowserHistory();

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => authenticated ? (
                render ? render(props) : <Button {...props}/>
            ) : (
                <div/>
            )
            }
        />
    );
}

const containers = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home,
    },
    {
        id: 2,
        path: '/Test',
        exact: false,
        component: Test,
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
            <Container>
                <div className='header'>
                    <h1>지금은 {this.state.date.toLocaleTimeString()}</h1>
                </div>
                <Router history={customHistory}>
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
                            <div>
                                <p>404</p>
                            </div>
                        )}>
                        </Route>
                    </Switch>
                    <ComponentsList container = {containers}/>
                </Router>
            </Container>
        )
    }
}

export default App;