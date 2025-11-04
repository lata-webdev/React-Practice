import React, { use, useState } from 'react'
import writting from "./assets/writting.png";
import { X } from 'lucide-react';

const App = () => {
  // Title ke liye state (user input ko store karne ke liye)
  const [title, setTitle] = useState('');
  const [Details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  // form handling
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(Details);
    const copyTask = [...task]; // old data
    // console.log(task);
    copyTask.push({ title, Details }); //new data
    setTask(copyTask); //add data
    console.log(copyTask); // one step piche chalta
    setTitle('');
    setDetails('');
  }

  function deleteNote(idx) {
    console.log("Note deleted");
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex items-start flex-col gap-4 p-10 lg:w-1/2'>
        <h1 className='font-bold text-4xl'>Add Notes</h1>

        {/* First input for heading  */}
        <input type="text" placeholder='Enter Notes Heading' className='px-5 font-medium outline-none py-2 border-2 rounded w-full' value={title}
          onChange={(e) => {
            // console.log('hello');
            // console.log(e.target.value);
            setTitle(e.target.value);
          }} />

        {/* Details input */}
        <textarea placeholder='Enter Details here' className='px-5 py-2 w-full outline-none font-medium h-32 border-2 rounded items-start flex-row' value={Details}
          onChange={(e) => {
            // console.log("hii");
            // console.log(e.target.value);
            setDetails(e.target.value);
          }} />
        <button className='bg-white text-black active:bg-gray-500 active:scale-99 flex font-medium outline-none px-5 py-2 w-full  rounded cursor-pointer'>Add Notes</button>

        <img className='rotate-y-180 h-80 ml-40' src={writting} alt="list-img" />
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='font-bold text-4xl'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto' id='right'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='relative h-52 w-40 rounded-2x py-9 px-4 bg-cover bg-[url("data:image/jpeg;base64,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")]'>
              <h2 className='absolute cursor-pointer active:scale-90 active:bg-yellow-300 top-1 right-1 bg-red-500 p-1 text-xs rounded-full' onClick={() => {
                deleteNote(idx);
              }}><X /></h2>
              <h3 className='font-bold leading-tight text-lg break-all ml-2  text-blue-700'>{elem.title}</h3>
              <p className='leading-tight font-semibold text-xs text-black break-all ml-2 mt-1'>{elem.Details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
