import React from 'react'

const Child3 = (props) => {
    console.log("child3 렌더링~");
    console.log(props);

     const style={
        backgroundColor:'lightgray',
        padding:'10px',
        height:'50px',
    }
  return (
    <div style={style}>
      <p>Child3 - App의 손자</p>
    </div>
)}

export default Child3