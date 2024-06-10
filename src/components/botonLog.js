"use client";
import Link from "next/link";

async function botonLog({ sesion }) {
  if (sesion == null) {
    return (
      <Link href="/auth/login">
        <button className="p-2 rounded-lg bg md:w-28 bg-white/80 dark:bg-blue-400/80 w-16 transition duration-500 hover:bg-white hover:shadow-xl 	">
          Login
        </button>
      </Link>
    );
  } else {
    return (
      //   <button className="flex flex-col items-center md:p-2 lg:p-2 rounded-lg md:w-28 bg-red-700 sm:w-16 sm:p-1 transition duration-500 hover:bg-red-800 hover:shadow-xl">

      <div className="flex justify-center items-center bg-white/50 dark:bg-blue-500/50 h-[3.35rem] w-[3.35rem] bg-center rounded-[50%] ">
        <Link
          href="/auth/logout"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={sesion.user?.image ? sesion?.user.image : "/user.svg"}
            className=" h-12 rounded-[50%]"
            alt="FloWeather Logo"
          />
        </Link>
      </div>
    );
  }
}

export default botonLog;
