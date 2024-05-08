"use client";
import { useFormStatus } from "react-dom";

function Button({ title }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-sky-600 transition duration-500 hover:bg-sky-600/50 bg-center text-[1.5vh] text-white bg-no-repeat h-16 rounded-xl w-28  cursor-pointer"
    >
      {title}
    </button>
  );
}

export default Button;
