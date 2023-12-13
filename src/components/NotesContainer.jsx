import React from 'react'
import NotesList from './NotesList';
import Message from './Message';

const NotesContainer = ({ notes, deleteHandler, archivedHandler }) => {
  const archivedNotes = notes.filter((note) => note.archived);
  const unarchivedNotes = notes.filter((note) => !note.archived);
  
  return (
    <div className="grid grid-cols-1 gap-6 h-[100vh] mt-5 px-4 lg:px-10 lg:grid-cols-2">
      <div className="col-span-1">
        <h2 className='text-3xl font-bold text-center md:text-5xl'>Notes</h2>
        {unarchivedNotes.length > 0 ? (
          <NotesList notes={unarchivedNotes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} />
        ) : (
          <Message title="There is no one note"/>
        )}
      </div>
      <div className="col-span-1">
        <h2 className='text-3xl font-bold text-center md:text-5xl'>Archived Notes</h2>
        {archivedNotes.length > 0 ? (
          <NotesList notes={archivedNotes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} />
        ) : (
          <Message title="There is no archived notes" />
        )}
      </div>
    </div>
  );
}

export default NotesContainer