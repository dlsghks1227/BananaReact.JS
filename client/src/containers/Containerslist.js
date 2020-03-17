import React from 'react';
import {
    Link as RouterLink,
} from 'react-router-dom';
import {
    Button,
} from '@material-ui/core';

// CSS
import './Containers.scss';

// API
import { useStyle } from '../api/api';

// forwardRef
// 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달하는
// React컴포넌트를 생성합니다.
// https://ko.reactjs.org/docs/react-api.html#reactforwardref
const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props}/>
));

export default function Containerslist(props) {
    const style = useStyle();

    return (
        <div className='list'>
            <div className='items'>
                <h1>List</h1>
                <h2>Container</h2>
                {
                    props.container.map( container => (
                    <Button
                        className={style.button}
                        component={LinkBehavior}
                        to={container.path}
                        key={container.id}>
                        {container.component.name}
                    </Button>
                ))}
                <h2>Authcontainer</h2>
                {
                    props.authcontainer.map( authcontainer => (
                    <Button
                        className={style.button}
                        component={LinkBehavior}
                        to={authcontainer.path}
                        key={authcontainer.id}>
                        {authcontainer.component.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};