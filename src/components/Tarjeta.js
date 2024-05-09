import React from "react";

function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className=" container items-center border-4 border-sky-700 p-8 rounded-md bg-gray-200/80">
        {children}
      </div>
    </div>
  );
}

export default Card;
