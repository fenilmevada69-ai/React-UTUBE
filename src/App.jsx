import React, {useState} from 'react';
function App() {
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }
    const jumpBy5 = () => {
        setCount(count + 5);
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 text-center">
            <h1 className="text-5xl font-bold text-gray-900">{count}</h1>
            <button className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700" onClick={increament}>Increment</button>
            <button className="rounded bg-yellow-500 px-4 py-2 font-semibold text-white hover:bg-yellow-600" onClick={decreament}>Decrement</button>
            <button className="rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700" onClick={jumpBy5}>Jump by 5</button>
        </div>
    )
}
export default App;
