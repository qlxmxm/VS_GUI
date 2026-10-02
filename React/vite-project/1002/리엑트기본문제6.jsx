// 6.
// const animals= [{id:1, name:"강아지"},{id:2, name:"고양이"}, {id:3, name:"토끼"}, {id:4, name:"햄스터"}];
// 1). 배열 리스트 다 출력한다(데이터들)
// 2). 삭제 버튼을 만들어 삭제한다. 
// 3). (id를 날짜로 변경해서 )- 추가 버튼을 만들어 input창에 데이터 추가시킨다. 
import React, { useState } from 'react'

const App = () => {
    
    const [animals,setAnimals]= useState([{id:1, name:"강아지"},{id:2, name:"고양이"}, {id:3, name:"토끼"}, {id:4, name:"햄스터"}]);

    const [ani,setAni]=useState('')

    const del=(id)=>{
        setAnimals(animals.filter((i)=>(i.id !== id)))
    }

    const addAni=()=>{
        const newAni={
            id: Date.now(),
            name:ani
        }

        setAnimals([...animals, newAni])
        setAni('')
    }


    return (
        <div>
            {animals.map((i)=>{
            return(
                <div key={i.id}>
                {i.name} <button onClick={()=>del(i.id)}>삭제</button>
        </div> )
    })}


            <input type='text' placeholder='동물입력' value={ani} onChange={(e)=>setAni(e.target.value)} />
            <button onClick={addAni}>추가</button>

            </div>
        )
    }

export default App