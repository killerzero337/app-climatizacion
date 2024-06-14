import React from "react";

function Footer() {
  return (
    <footer className="bg-sky-400 border-t-2 border-sky-600 dark:bg-gray-900 flex flex-col md:flex-row justify-around items-center font-Rounded font-bold rounded-sm fixed bottom-0 w-full h-14">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sm:justify-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-800 dark:text-blue-500">
            © {new Date().getFullYear()} {""}
            <a
              href="/"
              className="transition duration-500 hover:text-gray-700/70 inline-block"
            >
              FloWeather™
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center justify-center text-bold">
          <ul className="flex flex-wrap text-sm font-medium text-gray-800 sm:mt-0 space-x-5 sm:justify-center sm:items-center">
            <li>
              <a
                href="/politicas"
                className="transition duration-500 hover:text-gray-700/70 dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-700"
              >
                Politica de privacidad
              </a>
            </li>
            <li>
              <a
                href="/politicas"
                className="transition duration-500 hover:text-gray-700/70 dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-700"
              >
                Licencias
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="transition duration-500 hover:text-gray-700/70 dark:text-white md:dark:hover:text-blue-500 md:hover:text-blue-700"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
