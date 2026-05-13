//Batch Update in React
import React, { useState } from 'react'
const Component3 = () => {
    const [num,setNum] = useState(0);
    function btnCLicked() {
        //this will only update the number for 1 time
        // setNum(num+1);
        // setNum(num+1);
        // setNum(num+1);
        //this wll update the number for 3 times
        setNum((prevNum) => prevNum + 1);
        setNum((prevNum) => prevNum + 1);
        setNum((prevNum) => prevNum + 1);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1 className='text-4xl font-bold'>Component 3</h1>
            <h1>Num: {num}</h1>
            <button className='text-white bg-red-500 p-4 rounded-2xl' onClick={btnCLicked}>Click</button>
        </div>
    )
}

export default Component3