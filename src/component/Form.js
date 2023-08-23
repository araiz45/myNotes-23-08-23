import React, { useState, useContext } from 'react'
import noteContext from '../context/NoteContext';

function Form() {
  const context = useContext(noteContext)
  const { createNote } = context; 
  const [value, setValue] = useState('')
  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(value)
      createNote(value).then(()=>{
        setValue('')
      })

  }
  return (
    <>
        <div className='flex justify-center items-center p-5  flex-col'>
            <h1 className='text-white font-bold text-3xl mb-4 font-["Lilita One", cursive]'>Add Note</h1>
            <form action="" className='flex flex-col justify-center items-center p-33' onSubmit={handleSubmit} >
                <textarea name="notes" id="notes" cols="30" rows="10" className='w-96 p-4 mb-5 bg-gray-500 text-white rounded-lg  placeholder:text-gray-300 min-h-fit selection:bg-red-900 focus-visible:outline-none' placeholder='I have to eat at 9:00PM' value={value} onChange={(e)=>{setValue(e.target.value)}}></textarea>
                <button type="submit" className='border-2 border-solid rounded-lg bg-green-700 text-white px-4 py-2 transition-all duration-1000 hover:bg-green-900'>Add Note</button>
            </form>
        </div>
    </>
  )
}

export default Form