import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import girl1 from "./assets/cardgirl-1.jpg";
import girl2 from "./assets/cardgirl2.jpg";
import girl3 from "./assets/cardgirl-3.jpg";

const App = () => {
  const users = [
    {
      img: girl1,
      intro: "This is a sample intro.",
      tag: "Satisfied",
    },
    {
      img: girl2,
      intro: "Another user intro.",
      tag: "UnderServed",
    },
    {
      img: girl3,
      intro: "Yet another one.",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
