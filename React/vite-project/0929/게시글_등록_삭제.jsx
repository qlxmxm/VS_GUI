import React, { useEffect, useState } from 'react'

const Board = () => {

  const [posts, setPosts]=useState([
    {id:1, title:'첫번째 제목', content:'첫번째 내용'},
    {id:2, title:'두번째 제목', content:'두번째 내용'},
    {id:3, title:'세번째 제목', content:'세번째 내용'},
  ]);

  //클릭할때마다 클릭한 값(변화값)을 selPost1(객체)에 저장
  const [selPost1, setSelPost1]=useState(null);

  //원래는 null값이였는데 내가 세번째 제목을 클릭하면 {id:3, title:'세번째 제목', content:'세번째 내용'}
  //이 객체를 selPost1에 저장해줘!!!!
  //또 다른 값을 클릭하면 클릭할때마다 변경된 값을 selPost1에 저장해!!!!
  const selPost=(post)=>{
    setSelPost1(post); //post : 클릭한 값(객체)
  }

  //새 게시글 제목 관리하는 state
  const [newTitle, setNewTitle]=useState('');

  //새 게시글 내용 관리하는 state
  const [newContent, setNewContent]=useState('');

  //text창에 제목,내용 입력해서 "게시글 등록!!!!" 버튼 클릭하면
  //입력한 새로운 제목, 내용이 기존 객체배열에 추가되도록 구현

  //게시글 등록함수
  const addPost=()=>{
    if(newTitle.trim() && newContent.trim()){ //공백제거
      const newPost={
        id:posts.length+1,
        title:newTitle, //제목 입력하면 제목이 newTitle 에 저장
        content:newContent,
      };
      //setPosts 호출될때, 이전 state값과 새 값을 비교함(메모리 주소가 다른 배열인지 확인함)- 리렌더링-> 화면바뀜
      //배열이 새롭게 만들어져서 주소값이 바뀌어버림  -> 리렌더링-> 화면바뀜
      setPosts([...posts, newPost]);
      //기존게시물을 펼쳐서 복사하겠다. newPost를 배열 마지막에 추가하여 새로운 배열을 만들어 설정하겠다.
      //기존게시물은 유지, 추가만됨


      //등록하고 text, textarea 공백으로 설정
      setNewTitle("");
      setNewContent("");

    }
  }

  //해당 postId를 가진 게시글 삭제할거임
  //클릭한 id와 일치하지 않는 게시글의 id만 남겨서 posts 객체배열에 저장하겠다.
  const deletePost=(postId)=>{
    //                               클릭한 id  게시글 id
    setPosts(posts.filter((post1) => postId !== post1.id));
    //삭제된 게시글은 배열에 있으면 안되므로 .. setPosts를 사용해 상태변경함
  }

  //게시글을 클릭해서 상세화면이 보이는 상태에서 그 게시글이 삭제되었으면 그 게시글에 대한 상세화면이 보이지 않아야하기 때문에
  useEffect(()=>{
    //클릭한객체 // some: 조건을 만족하는 요소가 하나라도 있으면 true
    //              현재 게시글 목록안에 선택한 게시글과 id가 같은 게시글이 있냐? -> true
    //                                                          게시글이 없으면 -> true
    if(selPost1 && !posts.some((post) => post.id === selPost1.id)){
      setSelPost1(null);
    }
  },[posts, selPost1]);
  //게시글을 클릭해서 보고있는데,
  //그 게시글을 삭제하면 더이상 게시물이 선택되어있으면 안되니깐 초기값은 null로 세팅함

  return (
    <div className='board-app'>
      <h1>Board</h1>
      <div className='board-li'>
        <input type='text' 
               placeholder='제목 입력' 
               value={newTitle} 
               onChange={(e)=>setNewTitle(e.target.value)}>
                  </input><br></br>
        <textarea placeholder='내용 입력' 
                  value={newContent} 
                  onChange={(e)=>setNewContent(e.target.value)}>
                  </textarea>
        <button onClick={addPost}>게시글 등록!!!!</button>
        <h2>Board List</h2>
        
        {posts.map((i)=>{
          return(  //map return (배열 돌면서 출력할 jsx)
            <div key={i.id} 
                 className='board-item' 
                 onClick={()=>selPost(i)}>
              <h2>{i.title}</h2>

              <button onClick={()=>{
                deletePost(i.id)}}>삭제</button>
            </div>  //key 속성 왜 쓰냐 : React에서 배열 렌더링할때 각 항목 식별하기 위해
                    //상태변화 시 (어떤 항목이 변경, 추가, 삭제되었는지 효율적 파악)에 dom 엡데이트 최적화하기 위해
          )
        })}
      </div>

      {selPost1 && (
        <div>
          <h2>{selPost1.title}</h2>
          <h2>{selPost1.content}</h2>
        </div>
      )}
      
    </div>
  )
}

export default Board;