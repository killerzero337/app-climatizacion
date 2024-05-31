"use client";
import Link from "next/link";


function Menu({ sesion}) {
  

  return (
    <nav className="bg-sky-400 border-gray-200 dark:bg-transparent -mx-[10%]">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto">
        <div className="">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/cli-logo.svg" className="h-12" alt="FloWeather Logo" />
            <span className="xs:hidden  self-center text-2xl font-semibold whitespace-nowrap text-gray-100/80">
              FloWeather
            </span>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
export default Menu;
