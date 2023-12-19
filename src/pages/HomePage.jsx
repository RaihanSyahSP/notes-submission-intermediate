import React, { useState } from 'react'
import NotesContainer from '../components/NotesContainer'


const HomePage = ({notes, deleteHandler, archivedHandler}) => {
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