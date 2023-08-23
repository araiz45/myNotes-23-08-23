import React from 'react'
import noteContext from '../context/NoteContext';
import { useState, useContext } from 'react';

export const Note = (props) => {
  const context = useContext(noteContext)
  const { delNotes } = context; 
  // console.log(word)
  const {id, note, time} = props
  return (
    <><div className="w-72 min-h-[14rem] bg-yellow-200 p-4 rounded-lg flex flex-col items-center">
    <h2 className='text-center font-bold underline text-2xl mb-2'>Note</h2>
    <div className="flex gap-2 my-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer" onClick={()=>{ delNotes(id) }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    </div>
    <p>{note}</p>
</div></>
  )
}
