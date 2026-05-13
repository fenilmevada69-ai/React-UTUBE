import React, {useState} from 'react';

export const Component2 = () => {
  const [num, setNum] = useState({user: "Sarthak", age: 20});


  const btnClicked = () => {
    const newNum = {...num};
    newNum.user = 'Aman';
    newNum.age = 21;
    setNum(newNum);
    console.log(num);
  }

  return (
    <div style={{textAlign: "center"}}>
        <h1 className='text-4xl font-bold'>Component 2</h1>
        <h1>num: {num.user}</h1>
        <button className="bg-red-600 rounded-md py-2 px-2 text-white" onClick={btnClicked}>
          Click Me
        </button>
    </div>
  );
}