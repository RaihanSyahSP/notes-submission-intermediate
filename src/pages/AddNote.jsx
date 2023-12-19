import React from 'react'
import NotesInput from '../components/NotesInput'

const AddNote = ({onAddNotesHandler}) => {
  return (
    <NotesInput addNotes={onAddNotesHandler} />
  )
}

export default AddNote