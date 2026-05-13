//Two Way Binding ---> we will use react to handle this instead of doing by own
import React from 'react'
const Component5 = () => {
    const [title, setTitle] = React.useState("");
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submited by", title);
        setTitle("");
    }
    return (
        <div className='mt-5'>
            <div style={{textAlign: "center"}}>
                <form onSubmit={(e) => {SubmitHandler(e)}}>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className='h-10 p-2 mr-5 border border-black' placeholder='Enter Your Name'/>
                    <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Component5
