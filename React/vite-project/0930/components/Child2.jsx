import React from 'react'

const Child2 = () => {
    console.log("child2 렌더링~");

     const style={
        backgroundColor:'skyblue',
        padding:'10px',
        height:'50px',
    }
  return (
    <div style={style}>
      <p>Child2 - App의 손자</p>
    </div>
  )
}

export default Child2