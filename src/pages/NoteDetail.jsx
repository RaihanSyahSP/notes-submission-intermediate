import React from "react";
import { useParams } from "react-router-dom";
import parser from "html-react-parser";

import { showFormattedDate } from "../utils/data";
import Message from "../components/Message";

const NoteDetailPage = ({ notes, deleteHandler, archivedHandler }) => {
  const { id } = useParams();

  const noteDetail = notes.find((note) => note.id === parseInt(id));

  if (!noteDetail) {
    return <Message message="Note not found" />;
  }

  const { title, body, createdAt } = noteDetail;

  return (
    <section className="max-w-screen-lg mx-auto flex items-center justify-center h-screen">
      <div className=" p-8 card shadow-lg border border-secondary">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{showFormattedDate(createdAt)}</p>
        <div className="h-fit rounded-2xl max-h-96">
          <p className="break-words text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{parser(body)}</p>
        </div>
      </div>
    </section>
  );
};

export default NoteDetailPage;
