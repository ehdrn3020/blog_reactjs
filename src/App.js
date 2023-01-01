import './App.css';
import { useState } from 'react';

function App() {

  let post = 'DGK 서점';
  let [title, setTitle] = useState(['경제 서적 추전', '엠아이티 강의 주소', '겨울 여행 서적 추천']);
  let [like, setLike] = useState(Array.from({length: title.length}, (v, i) => 0));
  let [modal, setModal] = useState(false);
  let [m_title, setMTitle] = useState(title[0]);
  let [u_input, setUInput] = useState('');

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
            <div className="list" key={idx}>
              <h4 onClick={()=>{ setModal(!modal); setMTitle(data); }}>[{idx}] {data}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy_like = [...like];
                  copy_like[idx] += 1;
                  setLike(copy_like);
                }} >👍</span> {like[idx]}
              </h4>
              <p>12월 27일 발행</p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(idx,1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal title={m_title} /> : null
      }
      <input onChange={ (e)=>{ 
        setUInput(e.target.value); 
      }}/>
      <button onClick={()=>{
        if(u_input !== ''){
          let copy = [...title];
          copy.push(u_input); 
          setTitle(copy);
          document.querySelector('input').value = "";

          let copy_like = [...like];
          copy_like.push(0);
          setLike(copy_like);
        }
      }}>목록추가</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.change}>글수정</button>
    </div>
  )
}

export default App;
