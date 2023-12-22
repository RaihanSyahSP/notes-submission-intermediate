import React, { useEffect, useState } from 'react'
import NotesContainer from '../components/NotesContainer'


const HomePage = ({ notes, deleteHandler, archivedHandler }) => {
  useEffect(() => {
    console.log(notes)
  }, [notes])
  return (
    <section>
        <NotesContainer
          notes={notes}
          deleteHandler={deleteHandler}
          archivedHandler={archivedHandler}
        /> 
    </section>
  )
}

export default HomePage