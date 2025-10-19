import React from 'react'
import Card from "./components/Card";
import Navbar from './components/Navbar';

const App = () => {
  const user = "Lata";
  const age = 21;

  return (
    <div>
      <h1>Hello guys, I am {user}</h1>
      <h2>and i am {age} year old</h2>
      {/* {Card()} */}
      <Navbar />
      <Card />
    </div>
  )
}

export default App
