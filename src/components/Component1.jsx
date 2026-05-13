import React, {useState} from 'react';

export const Component1 = () => {
  const [num, setNum] = useState([10,20,30]);


  const btnClicked = () => {
    const newNum = [...num];
    newNum.push(40);
    setNum(newNum);
    console.log(num);
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1 className="text-4xl font-bold">Component 1</h1>
        <h1 className="mt-4 text-xl text-slate-900">num: {num.join(', ')}</h1>
        <button
          className="mt-8 rounded-md bg-red-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-red-500"
          onClick={btnClicked}
        >
          Click Me
        </button>
    </div>
  );
}