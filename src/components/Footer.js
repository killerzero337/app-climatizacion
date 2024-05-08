import React from "react";

function Footer() {
  return (
    <footer className="bg-sky-400 dark:bg-gray-900 flex flex-col md:flex-row justify-around items-center font-Rounded font-bold rounded-sm fixed bottom-0 w-full h-24">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sm:justify-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-800 dark:text-blue-500">
            © 2024{" "}
            <a
              href="/"
              className="transition duration-500 hover:text-gray-700/70 inline-block"
            >
              FloWeather™
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
        <hr className="border-gray-200 sm:mx-4  lg:my-4 w-full sm:w-auto" />
        <div className="flex items-center justify-center text-bold">
          <ul className="flex flex-wrap mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0 space-x-5 sm:justify-center sm:items-center">
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-gray-700/70"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-gray-700/70"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-gray-700/70"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
