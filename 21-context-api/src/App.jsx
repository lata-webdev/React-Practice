import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is navbar1</h2>
        <h2>This is navbar2</h2>
      </Navbar>
      <Button />
    </div>
  )
}

export default App
