import React from 'react'
import NotesContainer from '../components/NotesContainer'

const ArchivedNote = ({notes, deleteHandler, archivedHandler}) => {
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

export default ArchivedNote