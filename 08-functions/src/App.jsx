import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Button Clicked");
  }

  function mouseEnter() {
    console.log("Mouse Enter");
  }
  function inputChanging(val) {
    console.log(val)
  }
  function pageScrolling(elem) {
    // console.log('Page Scrolling...at speed', elem);
    if (elem > 0) {
      console.log("Seedhe Scrolling.....");
    } else {
      console.log("Ulta Scrolling....");
    }
  }
  return (
    <div>
      {/* both btn clicked call same function  */}
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click here!</button>

      <button onClick={btnClicked}>Click</button>

      {/* Inner function  */}
      <button onClick={function () {
        console.log("Hellow1");
      }}>Clicked</button>

      {/* Arrow function  */}
      <button onClick={() => {
        console.log("Hellow2");
      }}>Clicked</button>

      <div>
        {/* Click in input  */}
        <br />
        <input onClick={function () {
          console.log("clicked for type");
        }} type="text" placeholder='Enter Name' />

        {/* Typing in input  */}
        <br />
        <input onChange={function () {
          console.log("Typing...");
        }} type="text" placeholder='Enter Name' />

        {/* input with value pass  */}
        <input onChange={function (elem) {
          console.log(elem.target.value);
        }} type="text" placeholder='Enter Name' />

        {/* Input type  */}
        <input onClick={function (elem) {
          inputChanging(elem.target.value)
        }} type="text" placeholder='Enter Name' />
      </div>
      {/* Div  */}
      <div onMouseMove={(elem) => {
        console.log(elem.clientX);
        console.log(elem.clientY);
      }} className='box'>

      </div>

      <div onWheel={(elem) => {
        // console.log(elem.deltaY);
        pageScrolling(elem.deltaY);
      }}>
        <div className='part1'></div>
        <div className='part2'></div>
        <div className='part3'></div>
      </div>
    </div>
  )
}

export default App
