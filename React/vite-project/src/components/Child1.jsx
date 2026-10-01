import React,{memo} from 'react'
import Child2 from './Child2';
import Child3 from './Child3';

const Child1 = memo((props) => {
    console.log("child1 렌더링~");

    //console.log(props);
    const {onReset} = props;

    const style={
        backgroundColor:'yellow',
        padding:'10px',
    }

  return (
    <div style={style}>
        <p>첫번째 자식</p>
        <button onClick={onReset}>리셋버튼</button>
        <Child2 />
        <Child3 />
      
    </div>
  )
});
export default Child1