import './App.css';
import { useState } from 'react';

function App() {

  let post = '범계 서점';
  let [title, setTitle] = useState(['경제 서적 추전', '엠아이티 강의 주소', '겨울 여행 추천']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      
      <h4 style={ {color:'skyblue',fontSize:'15px'} }>{post}</h4>
      
      <button onClick={
        () => {
          let copy_title = [...title].sort();
          setTitle(copy_title);
        }
      }>가나다순 정렬</button>

      <button onClick={
        ()=>{
          let copy_title = [...title];
          copy_title[0] = '문학 서적 추천'
          setTitle(copy_title);
        }
      }>다른추천</button>

      <div className="list">
        <h4>{title[0]} <span onClick={ ()=>{setLike(like+1)} } >👍</span> {like}</h4>
        <p>12월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>12월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>12월 27일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
