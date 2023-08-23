import React from 'react'
import { Note } from './Note'
import noteContext from '../context/NoteContext';
import { useState, useContext, useEffect } from 'react';

export const Page = () => {
    // const [notting, setNotting] = useState([])
    const context = useContext(noteContext)
  const { notes, getNotes } = context; 
  console.log(notes.length)
  useEffect(() => {
    getNotes()
    // setNotting(notes)
  }, [])
  
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl font-bold my-5'>Shown Notes</h1>
            <div className='grid-cols-3 grid gap-3 justify-center items-center'>
               {notes.map((value)=>{
                  return ( 
                    <Note id={value._id} note={value.note} time={value.timming} key={value._id}/>
                  )
               })}
            </div>
        </div>
    )
}
