import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(function () {
    console.log('use effect is running...');
  }, [num]) //array dependecies for one time run when we click multiple time in click btn


  // 2nd 
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // 2nd 
  function aChanging() {
    console.log('A is value change ho gai');
  }
  function bChanging() {
    console.log('B is value change ho gai');
  }

  useEffect(function () {
    console.log("use effect is running...");
  }, [a, b]) // a means a click  hone pe message show in console , b means b print and blanks means only one time print 

  // a

  useEffect(function () {
    aChanging();
    console.log("use effect is running...");
  }, [a])

  // b
  useEffect(function () {
    bChanging();
    console.log("use effect is running...");
  }, [b])
  return (
    // 1st 
    < div >
      <h1>Value of num is {num}</h1>
      <h2>Value of num2 is {num2}</h2>
      <button onClick={() => {
        setNum(20);
        setNum(num + 1);
      }}
        onDoubleClick={() => {
          setNum2(num2 + 10);
        }}

        onMouseEnter={() => {
          setNum(num + 100);
        }}
        onMouseLeave={() => {
          setNum2(num + 50);
        }}
      >Click</button>

      {/* 2nd  */}
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a + 1);
      }}>Click A</button>
      <button onClick={() => {
        setB(b - 1);
      }}>Click B</button>
    </div >
  )
}

export default App
