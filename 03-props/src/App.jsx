import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="lata" age="21" />
      <Card user="Mithi" age="21" />
      <Card user="Bubu" age="22" />
    </div>
  )
}

export default App
