import React, { useState } from 'react'
import NotesInput from '../components/NotesInput'
import NotesContainer from '../components/NotesContainer'


const HomePage = ({notes, onDeleteNoteHandler, onArchivedNoteHandler}) => {
    
  return (
    <section>
          {/* <NotesInput addNotes={onAddNotesHandler} /> */}
        <NotesContainer
          notes={notes}
          deleteHandler={onDeleteNoteHandler}
          archivedHandler={onArchivedNoteHandler}
        /> 
    </section>
  )
}

export default HomePage