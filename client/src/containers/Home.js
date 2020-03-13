import React from 'react';

// Components

// CSS
// const useStyle = () => makeStyles(theme => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='item'>
                    <h1>Home</h1>
                </div>
            </div>
        );
    }
}

export default Home;