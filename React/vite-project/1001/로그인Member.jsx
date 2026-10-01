import React, { useState, useEffect } from 'react'
import "./member.css"

const Member = () => {

  //폼에 다 데이터 입력해서 - 추가, 삭제, 수정
  const [users,setUser]=useState([
  { id:1, username:"user1", email:"user1@gmail.com", password:"1234" },
  { id:2, username:"user2", email:"user2@gmail.com", password:"5678" },
  { id:3, username:"user3", email:"user3@gmail.com", password:"91011" },
]); 

  //클릭한 객체 저장
  const [selUser1,setSelUser1]=useState(null);

  const [today1, setToday1]=useState("");

  const [modiMode,setModiMode]=useState(false);

  //아래 return - form에다 데이터 입력하면 form 변수에 저장됨
  const [form,setForm]=useState({username:"", email:"", password:""}); //회원가입

  const [loginForm,setLoginForm]=useState({username:"", password:""}); //로그인

  const [loggedInUser,setLoggedInUser]=useState(null); //현재 로그인된 사용자 저장

  const [editUserForm,setEditUserForm]=useState({username:"", email:"", password:""}); //로그인 된 사용자 정보 수정

  //아이디(username)을 관리하는 state
  const [newUsername, setNewUsername]=useState('');

  //이메일 관리하는 state
  const [newUserMail, setNewUserMail]=useState('');


  const addUser= () => {
    if (form.username.trim()&&form.email.trim()&&form.password.trim()) {
      const newUser= {
        id:users.length+1,
        ...form, //form에입력한 값을 넣어라(username, email, password)
      };

    setUser([...users,newUser]); //아래 form에 입력한 새로운 username, email, password이 기존 객체배열에 추가된다.
    setForm({ username:"", email:"", password:"" });
  }
};

const now=new Date();

useEffect(() => {
  setToday1(`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,"0")}-${now.getDate().toString().padStart(2,"0")} ${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}`);
}, []);

  const logoutUser=()=>{
    setLoggedInUser(null);
  }

    const updateMyInfo=()=>{
      const updateUser=users.map((user) => user.id === loggedInUser.id ? {...user, ...editUserForm} : user);

      setUser(updateUser);
      setLoggedInUser({ ...loggedInUser, ...editUserForm }); //로그인한 사용자 정보 - 수정된 값 넣음
      setEditUserForm({ username:"", email:"", password:"" }); // 회원정보수정 버튼 누르고 폼 비어있게 초기화함

      alert("회원정보 수정 완료");
    };

    const loginUser=()=>{
      const user=users.find((user) => user.username === loginForm.username &&
                                       user.password === loginForm.password);

      if(user){
        setLoggedInUser(user); //로그인한 사용자 객체 저장
        setEditUserForm(user);
        setLoginForm({username:"", password:""});
      }
      else{
        alert("아이디 또는 비밀번호가 틀렸습니다");
      }
    }

    //회원목록중 하나를 클릭할때마다 변화값을 selUser1(객체)에 저장
    const selUser=(user)=>{
      setSelUser1(user);  //user : 클릭한 값(객체)

    }

    //해당 userID가진 회원 삭제할거임
    //선택한 id와 일치하지 않는 회원들만 남겨서 users에 저장함
    const deleteUser= (userId) => {
      setUser(users.filter((user) =>user.id!==userId));
    };


    //상세보기로 뜬 회원이 목록에서 삭제되었다면, 선택을 해제해라!!!!
    useEffect(() => {
        if (selUser1&&!users.some((user) =>user.id===selUser1.id)) {
            setSelUser1(null);
      }
      }, [users,selUser1]); //회원 목록이나 선택된 회원이 바뀔때마다 함수 안 실행
      //회원 클릭해서 보고 있는데,
      //그 회원 삭제하면 더이상 회원이 선택되어있으면 안되니까..null로 세팅


      //수정한 후 저장버튼 클릭 시 -> 선택한 회원을 업데이트 하는 함수 -> 날짜도 변경되므로
      const updateUser=()=>{
        const now=new Date();
        const today1=`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,"0")}-${now.getDate()
          .toString().padStart(2,"0")} ${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString()
            .padStart(2,"0")}`;

        const updateUsers=users.map((user) => user.id === selUser1.id ?
        {...user, 
          username:selUser1.username,
          email:selUser1.email,
          date:today1,
        } : user);

        setUser(updateUsers);

        //수정모드 false로 세팅
        setModiMode(false);
      }


  return (
    <div className='app'>
      <h1>Member</h1>

      {/*로그인 여부에 따라서 회원가입을 보이고 안보이고 */}
      {/*로그인이 안되어있으면 */}
      {!loggedInUser ? ( 
      <div className='auth-section'>
        <h2>회원가입</h2>
        <input type='text' placeholder='아이디 입력' onChange={(e)=>setForm({...form, username:e.target.value})} value={form.username}></input><br></br>
        <input type='email' placeholder='이메일 입력' onChange={(e)=>setForm({...form, email:e.target.value})} value={form.email}></input><br></br>
        <input type='password' placeholder='비밀번호 입력' onChange={(e)=>setForm({...form, password:e.target.value})} value={form.password}></input><br></br>
        <button onClick={addUser}>회원 가입</button>
      </div>
      ) : (
        //로그인 되어있으면
        <>
          <h2>로그인된 사용자 : {loggedInUser.username}</h2>
          <button onClick={logoutUser} className='logoutBtn'>로그아웃</button>

          <div className='user-detail'>
            <h2>회원 정보 수정</h2>
            {/* editUserForm사용.. */}
            <input type='text' onChange={(e)=>setEditUserForm({...editUserForm, username:e.target.value})} value={editUserForm.username}></input><br></br>
            <input type='email' onChange={(e)=>setEditUserForm({...editUserForm, email:e.target.value})} value={editUserForm.email}></input><br></br>
            <input type='password' onChange={(e)=>setEditUserForm({...editUserForm, password:e.target.value})} value={editUserForm.password}></input><br></br>

            <button onClick={updateMyInfo}>회원 정보 수정</button>

          </div>
        </>
      )
    }

    <div className='auth-section'>
      <h2>로그인</h2>
      <input type='text' placeholder='아이디 입력' onChange={(e)=>setLoginForm({...loginForm, username:e.target.value})} value={loginForm.username}></input><br></br>
      <input type='password' placeholder='비밀번호 입력' onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})} value={loginForm.password}></input><br></br>
      <button onClick={loginUser}>로그인</button>
      <h2>{today1}</h2>
      {users.map((user1)=>{
        return(
          <div key={user1.id} className='po-item' onClick={()=>{selUser(user1)}}>
            <h1>{user1.username}</h1>
            <p>{user1.email}</p>
            <button onClick={(e)=>{
              e.stopPropagation(); //삭제된 회원이 선택상태로 설정될수 있어서 적어야함 -> 버블링때문
              deleteUser(user1.id)}}>삭제</button>
          </div>
        )
      })}
    </div>


{/* 상세보기 */}
    {selUser1 && (
      <div className='selected-user'>
        {modiMode ? (
        <>
        <input type='text' onChange={(e)=>setSelUser1({...selUser1, username:e.target.value})} value={selUser1.username} />
        <input type='email' onChange={(e)=>setSelUser1({...selUser1, email:e.target.value})} value={selUser1.email} />
        <button onClick={updateUser}>저장</button>
        </>
        ):(
          <>
          {/* //클릭한 사용자 이름, 이메일,  */}
          <h2>{selUser1.username}</h2>
          <p>{selUser1.email}</p>
          <button onClick={()=>setModiMode(true)}>수정</button>
          </>
        )  
      }
      </div>
    )}
    </div>
  )
}

export default Member
