import { useState } from "react"
import { useSnackbar } from "notistack";
import Navbar from "./Navbar"
import { getInitialData } from "../utils/data"
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddNote from "../pages/AddNote";
import ArchivedNote from "../pages/ArchivedNote";

const NotesApp = () => {
    const [initialNotes, setInitialNotes] = useState(getInitialData());
    const [notes, setNotes] = useState(initialNotes);
    const { enqueueSnackbar } = useSnackbar();

    const onAddNotesHandler = ({ title, body, createdAt, archived }) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived,
      };

      setNotes((prevState) => [...prevState, newNote]);
      setInitialNotes((prevInitialNotes) => [...prevInitialNotes, newNote]);
    };

    const onDeleteNoteHandler = (id) => {  
      setNotes((prevState) => prevState.filter((note) => note.id !== id));
      setInitialNotes((prevInitialNotes) => prevInitialNotes.filter((note) => note.id !== id));
      enqueueSnackbar("Note deleted successfully", { variant: "success" });
    };

    const onArchivedNoteHandler = (id) => {
      setNotes((prevState) => {
        return prevState.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          }
          return note;
        });
      });

      setInitialNotes((prevState) => {
        return prevState.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          }
          return note;
        });
      });
      enqueueSnackbar("Note archived successfully", { variant: "success" });
    };

    const onSearchHandler = (search) => {
      if (search === "") return setNotes(initialNotes);
      setNotes((prevState) => {
        return prevState.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
      });
    };
    

  return (
    <div className="mx-auto h-screen">
      <header>
        <Navbar onSearch={(search) => onSearchHandler(search)} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={
            <HomePage
              notes={notes}
              deleteHandler={onDeleteNoteHandler}
              archivedHandler={onArchivedNoteHandler}
            />}
          />
          <Route path="/add" element={<AddNote onAddNotesHandler={onAddNotesHandler} />} />
          <Route path="/archived" element={<ArchivedNote notes={notes} />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp