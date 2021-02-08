import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import LikeButton from './myTest/state.js'
// import LikeButtonProp from './myTest/props'
// import CommetApp from './commet/CommetApp'
// import Mount from './mount/mount'
// import AutoFocusInput from './ref/index'


// class Header extends Component {
//   render(){
//     const word = 'is good'
//     return (
//       <div>
//         <Title/>
//         <h1 className={word}>xjjalaf {word}</h1>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   handleClick(a,b){
//     console.log('click on title')
//     console.log(this,a,b)
//   }
//   render(){
//     return (
//         <div>
//           <div onClick={this.handleClick.bind(this,'hello','fat ass')}>title1</div>,
//           <div>title2</div>,
//           <div>title3</div>
//           <LikeButton/>
//           <LikeButtonProp likeText='喜欢' unLikeText='不喜欢' onClick={()=>{console.log('hit me')}}  wording={{likeText:'like',unLikeText:'no like'}}/>
//           <LikeButtonProp/>
//         </div>
//     )
//   }
// }

// class Clock extends Component {
//   constructor(){
//     super()
//     this.state={
//        showClock:true
//     }
//   }
  
//   handleClick(){
//     this.setState({showClock:!this.state.showClock})
//   }

//   render(){
//     return(
//       <div>
//         <div onClick={this.handleClick.bind(this)}>显示或者隐藏⏰</div>
//         {this.state.showClock ? <Mount/> : null}
//       </div>
//     )
//   }
// }


ReactDOM.render(
  <div>
     <span>电子书</span>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
