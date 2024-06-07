import React from "react";
import Link from "next/link";

async function tarjetaPrismacamara({ camara }) {
  {
    console.log(camara);
  }
  return (
    <>
      <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <div className="bg-white p-7 rounded-md">
          <h1 className="font-bold text-xl mb-2">
            {camara?.nombre || "Ejemplo"}
          </h1>
          <p>{camara?.info || "Ejemplo"}.</p>
        </div>
        <div className="flex justify-around gap-5">
          <Link
            href={{
              pathname: "/camara/delete",
              query: { camara_id: camara?.id, id: camara?.id },
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Borrar
          </Link>
          <Link
            href={{
              pathname: "/camara/edit",
              query: { id_proyecto: camara?.id, id: camara?.id },
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            editar
          </Link>
        </div>
      </div>
    </>
  );
}

export default tarjetaPrismacamara;
