import React from 'react'
import { useState } from 'react'
function App()
{
  const [car, setCar] = useState({ year: 1997, name: "Ford", modal: "Mustank" });

  function handleYearChange(event) 
  {
    setCar(c => ({ ...c, year: event.target.value }));
  }

  function handleNameChange(event)
  {
    setCar(c => ({ ...c, name: event.target.value }));
  }

  function handleModalChange(event)
  {
    setCar(c => ({ ...c, modal: event.target.value }));
  }

  return (
    <div className='flex flex-col items-center justify-center m-4 '>
      <div className="flex flex-col m-45 items-center w-130 bg-zinc-600">
        <p className="text-4xl bg-indigo-400 ">Your Car is : {car.year}, {car.name}, {car.modal} </p>
        <input className='border bg-white rounded p-2 text-2xl m-4' type="number" value={car.year} onChange={handleYearChange} />
        <input className='border bg-white rounded p-2 text-2xl m-4' type="text" value={car.name} onChange={handleNameChange} />
        <input className='border bg-white rounded p-2 text-2xl m-4' type="text" value={car.modal} onChange={handleModalChange} />
      </div>
    </div>
  )
}

export default App
