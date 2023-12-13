import React from 'react'

const Message = ({title}) => {
  return (
    <div className="card w-full shadow-xl mt-10 bg-error">
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Message