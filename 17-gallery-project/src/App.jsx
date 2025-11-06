import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [userData, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    // console.log('Data aa gaya');
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}3&limit=30`);
    setUserdata(response.data);
    console.log(response.data);
  }

  useEffect(function () {
    getData();
  }, [index])

  let printUserdata = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 translate-x-1 translate-y-1 font-semibold'>Loading ......</h3>;
  if (userData.length > 0) {
    printUserdata = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      <h1 className='fixed bg-red-500 text-6xl'>{index}</h1>
      {/* <button onClick={getData} className='bg-green-600 text-white mb-3 px-5 py-2 rounded m-4 active:scale-95 cursor-pointer'>Get Data</button> */}
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserdata}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        style={{ opacity: index == 1 ? 0.5 : 1 }}
        <button className='bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95'
          onClick={function () {
            console.log('Prev button Clicked');
            if (index > 1) {
              setIndex(index - 1);
              setUserdata([]);
            }
          }}>Prev</button>

        <h4> Page {index} </h4>
        <button className='bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95'
          onClick={function () {
            console.log('Next button clicked');
            setUserdata([]);
            setIndex(index + 1);
          }}>Next</button>
      </div>
    </div>
  )
}

export default App
