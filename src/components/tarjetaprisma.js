import React from "react";
import Link from "next/link";
function tarjetaPrisma({ children, proyecto }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-blue-500">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="rounded-t-lg"
            src={
              proyecto?.imagen ? proyecto.imagen : "/project-image-default.jpg"
            }
            alt=""
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {proyecto?.nombre}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {proyecto?.comentarios}
          </p>
          <div className="flex justify-around gap-5">
            <Link
              href="/proyecto/edit"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              editar
            </Link>
            <Link
              href="proyecto/delete"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              borrar
            </Link>
            <Link
              href="proyecto/copy"
              className="inline-flex items-center px-2 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              copiar
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default tarjetaPrisma;
