// import React from 'react';
// import {
//   Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
// //import logo from './logo.svg';

// // Components
// // import Home from './containers/Home';
// // import Test from './containers/Test';

// // css
// import './App.scss';

// // --------------------------------
// class App extends React.Component {
//   // ReactDOM.render()로 전달되었을 때 React는 컴포넌트의 constructor를 호출합니다.
//   // 현재 시각을 표시해야 하기 때문에 현재 시작이 포함된 객체로 this.state를 초기화 합니다.
//   constructor(props){
//     super(props);
//     this.state = {
//       users : [],
//       date : new Date(),
//     };
//   }

//   // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다.
//   async componentDidMount() {
//     // 매초 브라우저가 tick() 메서드를 호출시킵니다.
//     this.timerID = setInterval(() => this.tick(), 1000);

//     try {
//       const response = await fetch('/users');
//       const json = await response.json();
//       this.setState({ users : json });
//     } catch(err) {
//       console.log(err);
//     }
//   }

//   // 컴포넌트가 DOM 상에서 제거될 때에 호출합니다.
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date : new Date()
//     });
//   }

//   // App 컴포넌트의 render() 메서드를 호출합니다.
//   render() {
//     return (
//       <Router>
//       </Router>
//       // <div className='header'>
//       // <h1>지금은 {this.state.date.toLocaleTimeString()} 입니다</h1>
//       // </div>
//     )
//   }
// }

// export default App;
