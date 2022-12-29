import './App.css';
import { useState } from 'react';

function App() {

  let post = '범계 서점';
  let [title, setTitle] = useState(['경제 서적 추전', '엠아이티 강의 주소', '겨울 여행 추천']);
  let [like, setLike] = useState(Array.from({length: title.length}, (v, i) => 0));
  let [modal, setModal] = useState(false);

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
      {
        title.map(function(data, idx){
          return (      
            <div className="list">
              <h4 onClick={()=>{ setModal(!modal) }}>[{idx}] {data}</h4>
                <span onClick={()=>{
                  let copy_like = [...like];
                  copy_like[idx] += 1
                  setLike(copy_like)
                }} >👍</span> {like[idx]}
              <p>12월 27일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal/> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
