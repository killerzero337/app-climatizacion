import React, { useState } from "react";

const Popover = ({ content, children }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showPopover && (
        <div className="absolute z-10 w-64 p-2 mt-2 text-sm text-white bg-black rounded shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
