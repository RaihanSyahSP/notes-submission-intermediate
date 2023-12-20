import React from 'react'
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import Modal from './Modal';

const NotesItem = ({ id, title, body, createdAt, archivedHandler, archived, deleteHandler }) => {
  const navigate = useNavigate();

  const handleNoteClick = () => {
    navigate(`/note/${id}`);
  }

	return (
    <div className="card w-full shadow-2xl mt-5 bg-base-100 border hover:border-secondary hover:cursor-pointer" key={id}>
      <div className="card-body p-5">
        <h2 className="card-title underline" onClick={handleNoteClick}>
          {title}
        </h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p className="overflow-hidden line-clamp-5">{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={() => document.getElementById(id).showModal()}>
            Delete
          </button>
          <Modal id={id} title={title} deleteHandler={deleteHandler} />
          <button className="btn btn-warning" onClick={() => archivedHandler(id)}>
            {archived ? "Unarchive" : "Archive"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesItem