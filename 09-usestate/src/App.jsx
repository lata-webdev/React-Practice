import React, { useState } from 'react'


const App = () => {

  const [num, setNum] = useState(20);
  const [username, setUsername] = useState("Lata");
  const [users, setUsers] = useState([1, 3, 4]);
  const [no, setNo] = useState(0);
  function changeNum() {
    setNum("Hello");
    setUsername("Mithi");
    setUsers([5, 7, 8]);
  }

  function increaseN() {
    setNo(no + 1);
  }
  function decreaseN() {
    setNo(no - 1);
  }
  function jump5Num() {
    setNo(no + 5);
  }
  return (
    <div>
      <h1>Value of a is {num} <br />{users}<br /> and the value of user is {username}</h1>
      <button onClick={changeNum}>Click here!</button>

      {/* buttons  */}
      <div>
        <h1>{no}</h1>
        <button onClick={increaseN}>Increase</button>
        <button onClick={decreaseN}>Descrease</button>
        <button onClick={jump5Num}>Increase 5</button>
      </div>
    </div>
  )
}

export default App
