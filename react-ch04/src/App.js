import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return <div>こんちわ {props.name}さん</div>
};

const BooleanNumber = (props) => {
  return <div>数字or真偽値 {props.value}</div>
};

const Profile = (props) => {
  return (
    <ul>
      <li>名前: {props.name}</li>
      <li>誕生日: {props.birthDay}</li>
    </ul>
  )
};

const profile = {
  name: '坂本りょうまー',
  birthDay: '1982.02.01'
}

class App extends Component {
  render() {
    return (
      <div>
        <Profile name='坂本龍馬' birthDay='1973.02.01'/>
        <Profile {...profile} />
      </div>
    );
  }
}

export default App;
