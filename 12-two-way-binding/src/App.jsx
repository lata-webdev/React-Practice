import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    // console.log("form submitted"); mini sec ke liye show hoga ye message bcz bydefault ese hi rehta hai 
    e.preventDefault();  // prevent bydefault  & show message now in console
    console.log("Form Submited");
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => {
          console.log(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
