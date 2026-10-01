import React from 'react'


    const style={
        backgroundColor:'beige',
        padding:'10px',
        height:'200px',
    }

const Child4 = (props) => {
    console.log("child4 렌더링~");
  return (
    <div style={style}>
        <p>Child4 - App의 자식</p>
    </div>
  )
}

export default Child4