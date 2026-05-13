//Two Way Binding --> doing from react instead by own 
import React, {useState} from 'react';

function Form() {
    const [title, setTitle] = useState('');
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
        setTitle('');
    }
    return(
        <div>
            <form onSubmit={(e) => {SubmitHandler(e)}}>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter your name" /><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;