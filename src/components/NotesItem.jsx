import React from 'react'
import { showFormattedDate } from '../utils/data';
import Modal from './Modal';
import Button from './FloatingButton';


const NotesItem = ({ id, title, body, createdAt, archivedHandler, archived, deleteHandler }) => {
	return (
    <div className="card w-full shadow-2xl mt-5 bg-base-100 border hover:border-secondary hover:cursor-pointer" key={id}>
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
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