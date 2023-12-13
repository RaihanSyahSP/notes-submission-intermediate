import React from 'react'

const Modal = ({id, title, deleteHandler}) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Warning</h3>
        <p className="py-4">
          Are you sure want to delete <span className="text-lg font-bold">{title}</span> note?
        </p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-2">
              <button className="btn btn-error" onClick={() => deleteHandler(id)}>
                Delete
              </button>
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal