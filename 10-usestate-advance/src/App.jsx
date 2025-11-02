import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10);
  const [numb, setnumb] = useState({ user: 'lata', age: 21 });
  const [nums, setnums] = useState({ user: 'bob', age: 23 });
  const [numms, setnumms] = useState([10, 20, 30]);
  const [nub, setnub] = useState({ user: 'lata', age: 23 });
  const [n, setn] = useState(0);
  function btnChange() {
    console.log(num);
    setnum(20);
    console.log(num);
    // setnum(num + 1);
  }
  function btnChange2() {
    setnumb({ user: 'mithi', age: 21 });
    console.log(numb.user);
    console.log(numb.age);
  }
  function btnChange3() {
    // destructuring 
    const newNum = { ...nums };
    newNum.user = 'lol';
    newNum.age = 20;
    setnums(newNum);
  }
  const btnclick = () => {
    const newNum = [...numms];
    newNum.push(99);
    setnumms(newNum);
  }
  function btnclick2() {
    setnub(prev => ({ ...prev, age: 90 }));
  }
  function batchUpdate() {
    // setn(n + 1);
    // setn(n + 1); these is not working in 3 increase
    // setn(n + 1);

    // 3 increase
    setn(prev => (prev + 1));
    setn(prev => (prev + 1));
    setn(prev => (prev + 1));
  }
  return (
    <div>
      <h1>{num}</h1>
      <h2>{numb.user} {numb.age}</h2>
      <h3>{nums.user} {nums.age}</h3>
      <h4>{numms}</h4>
      <h5>{nub.user}{nub.age}</h5>
      <h6>{n}</h6>
      <button onClick={btnChange}>Click-1</button>
      <button onClick={btnChange2}>Click-2</button>
      <button onClick={btnChange3}>Click-3</button>
      <button onClick={btnclick}>Click-4</button>
      <button onClick={btnclick2}>Click-5</button>
      <button onClick={batchUpdate}>Click-6</button>
    </div>
  )
}

export default App
