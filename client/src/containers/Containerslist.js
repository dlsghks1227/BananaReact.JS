import React from 'react';
import {
    Link as RouterLink,
    useHistory,
} from 'react-router-dom';
import {
    Button,
} from '@material-ui/core';

// CSS
import './Containers.scss';

// API
import { useAuth, useStyle } from '../api/api';

// forwardRef
// 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달하는
// React컴포넌트를 생성합니다.
// https://ko.reactjs.org/docs/react-api.html#reactforwardref
const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props}/>
));

export default function Containerslist({containers, authcontainers}) {
    const auth = useAuth();
    const style = useStyle();
    const history = useHistory();

    const handleClick = () => {
        auth.logout();
        history.push('/');
    }

    return (
        <div className='list'>
            <div className='items'>
                <h2>Container</h2>
                { auth.user ?
                    <Button className={style.button} onClick={handleClick}>Logout</Button> :
                    <Button className={style.button} component={LinkBehavior} to='/login'>Login</Button>
                }
                {
                    containers.map((container, index) => (
                        <Button
                            key={index}
                            className={style.button}
                            component={LinkBehavior}
                            to={container.path}>
                            {container.name}
                        </Button>
                    ))
                }
                <h2>Authcontainer</h2>
                {
                    auth.user ? 
                    authcontainers.map((authcontainer, index) => (
                    <Button
                        key={index}
                        className={style.button}
                        component={LinkBehavior}
                        to={authcontainer.path}>
                        {authcontainer.name}
                    </Button>
                )) : ''}
            </div>
        </div>
    );
};