import { useState } from "react"
import { useSnackbar } from "notistack";
import Navbar from "./Navbar"
import NotesInput from "./NotesInput"
import { getInitialData } from "../utils/data"
import NotesContainer from "./NotesContainer"

const NotesApp = () => {
    const [initialNotes, setInitialNotes] = useState(getInitialData());
    const [notes, setNotes] = useState(initialNotes)
    const { enqueueSnackbar } = useSnackbar();

    const onAddNotesHandler = ({title, body, createdAt, archived}) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived,
      };

      setNotes((prevState) => [...prevState, newNote]);
      setInitialNotes((prevInitialNotes) => [...prevInitialNotes, newNote]);
      enqueueSnackbar("Note added successfully", { variant: "success" });
    }

    const onDeleteNoteHandler = (id) => {
      setNotes((prevState) => (prevState.filter((note) => note.id !== id)));
      setInitialNotes((prevInitialNotes) => (prevInitialNotes.filter((note) => note.id !== id)));
      enqueueSnackbar("Note deleted successfully", { variant: "success" });
    }

    const onArchivedNoteHandler = (id) => {
      setNotes(prevState => {
        return prevState.map(note => {
            if(note.id === id) {
                return {
                  ...note,
                  archived: !note.archived
                }
            }
            return note
        })
      })

      setInitialNotes(prevState => {
        return prevState.map(note => {
            if(note.id === id) {
                return {
                  ...note,
                  archived: !note.archived
                }
            }
            return note
        })
      })
      enqueueSnackbar("Note archived successfully", { variant: "success" });
    }

    const onSearchHandler = (search) => {
      if (search === "") return setNotes(initialNotes);
      setNotes((prevState) => {
        return prevState.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      });
    };
    

  return (
    <div className="mx-auto h-screen">
      <Navbar onSearch={(search) => onSearchHandler(search)} />
      <NotesInput addNotes={onAddNotesHandler} />
      <NotesContainer
        notes={notes}
        deleteHandler={onDeleteNoteHandler}
        archivedHandler={onArchivedNoteHandler}
      />
    </div>
  )
}

export default NotesApp