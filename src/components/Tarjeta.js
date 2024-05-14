import React from "react";

function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] sm:h-[100vh] text-blue-500 ">
      <div className=" container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        {children}
      </div>
    </div>
  );
}

export default Card;
