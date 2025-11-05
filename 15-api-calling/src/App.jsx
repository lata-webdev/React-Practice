import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  //1. fetch method
  //without async and wait we will get promise datatype ouput bcz data in progress to resolve this we can use async and await (fetch methods)
  function getData0() {
    // console.log("Data aa gaya");
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  }

  //async and await in fetch
  async function getData() {
    // console.log("Data aa gaya");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  }

  //Arrow function 
  const getData2 = async () => {
    const response2 = await fetch('https://jsonplaceholder.typicode.com/photos');
    // console.log(response2);
    // console.log(response2.json()); // output comes in promise datatype
    const data = await response2.json(); // output will come in easily 
    console.log(data);
  }


  //2. Axios methods

  const [data, setData] = useState([]);

  const getData3 = async () => {
    // console.log('Nacho...');

    // 1st way 
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    // console.log(response);
    console.log(response.data);

    // 2nd way 
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
    // console.log(data);
    setData(data);

  }

  return (
    <div>
      <button onClick={getData0}>Get Data0</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData2}>Get Data2</button>
      <button onClick={getData3}>Get Data3</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>Hello {elem.title} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
