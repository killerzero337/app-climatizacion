import React from "react";
import Link from "next/link";

async function tarjetaPrismaEquipo({ equipo }) {
  {
    console.log(equipo);
  }
  return (
    <>
      <div className="relative mx-auto w-full max-w-md rounded-lg bg-gradient-to-tr dark:from-sky-100 dark:to-sky-400 from-gray-300 to-blue-500 dark:bg-gray-800 p-0.5 shadow-lg">
        <div className=" bg-gray-100 dark:bg-gray-900/90 p-7 rounded-md">
          <h1 className="font-bold text-xl mb-2">
            {equipo?.nombre || "Ejemplo"}
          </h1>
          <div className="flex justify-around flex-col md:flex-row">
            <p>{"Potencias (W): " + equipo?.potencia || "Ejemplo"}</p>
            <p>
              {"Factor funcionamiento: " + equipo?.factor_funcionamiento ||
                "Ejemplo"}
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-5">
          <Link
            href={{
              pathname: "/equipo/delete",
              query: { id: equipo?.id },
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Borrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default tarjetaPrismaEquipo;
