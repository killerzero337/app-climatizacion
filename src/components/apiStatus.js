"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const ApiStatusLink = () => {
  const [status, setStatus] = useState("waiting");

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        setStatus("waiting"); // Set status to waiting initially
        const response = await fetch("https://api-climatologia.onrender.com/status");
        if (response.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };

    checkApiStatus();

    // You can set an interval to check the API status periodically if needed
    const interval = setInterval(checkApiStatus, 60000); // Check every 60 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const getLinkClassName = () => {
    switch (status) {
      case "success":
        return "text-green-500 hover:bg-green-100/50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-500 md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent";
      case "error":
        return "text-red-500 hover:bg-red-100/50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-red-500 md:dark:hover:text-red-500 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent";
      case "waiting":
        return "text-blue-500 animate-pulse hover:bg-blue-100/50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent";
      default:
        return "text-gray-800 hover:bg-gray-100/50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    }
  };

  return (
    <li>
      <Link
        href="https://api-climatologia.onrender.com/"
        className={`block py-2 px-3 rounded ${getLinkClassName()}`}
      >
        ◉ Estado API
      </Link>
    </li>
  );
};

export default ApiStatusLink;
