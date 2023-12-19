import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const FloatingButton = (type, className) => {
  return (
    <button className="btn btn-circle btn-lg fixed right-4 bottom-4 z-10 rounded-full hover:scale-105">
      <span className="text-6xl text-secondary">
        <IoMdAddCircle />
      </span>
    </button>
  );
}

export default FloatingButton