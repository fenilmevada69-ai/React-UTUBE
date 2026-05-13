//Form Handling


import React from 'react'

function Component4() {
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submited");
    }
    return (
      <div style={{textAlign: "center"}}>
          <form onSubmit={(e) => {SubmitHandler(e)}}>
              <input type="text" className='border-amber-700' placeholder='Enter Your Name'/>
              <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
      </div>
    )
}

export default Component4
