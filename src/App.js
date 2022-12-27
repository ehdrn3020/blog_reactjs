import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '범계 서점';
  let [title, b] = useState('경제 서적 추전');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <h4 style={ {color:'skyblue',fontSize:'15px'} }>{post}</h4>
      <div className="list">
        <h4>{title}</h4>
        <p>12월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
