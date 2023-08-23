import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) =>{
   const [notes, setNotes] = useState([''])
    const createNote = async (note) =>{
      try {
        const response = await fetch("http://localhost:5000/add", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"note": note}),
        });
    
        const result = await response.json();
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
      getNotes();
    }

    const getNotes = async () =>{
      try {
        const response = await fetch("http://localhost:5000/get")
        const result = await response.json();
        // console.log(result)
        setNotes(result.notes)
      } catch (error) {
        console.error("Error:", error);
      }

    }

    const delNotes = async (id) =>{
        console.log(id)
        try {
          const response = await fetch(`http://localhost:5000/del?id=${id}`, {
            method: "DELETE", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
          })
          const result = await response.json();
          getNotes()
        } catch (error) {
          console.error("Error:", error);
        }
    }
    delNotes()
    return (
      <NoteContext.Provider value={{ createNote, notes, getNotes, delNotes }}>
        {props.children}
      </NoteContext.Provider>
    )
    
  }
  
  export default NoteState