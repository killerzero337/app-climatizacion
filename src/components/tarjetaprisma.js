import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import { getNameUser, createPDF } from "@/lib/actions-proyecto";
import Button from "./button-form";

async function tarjetaPrisma({ proyecto }) {
  const sesion = await auth();
  let nombre = "Desconocido";

  if (proyecto?.userId) {
    nombre = await getNameUser(proyecto.userId);
  }
  if (sesion?.user.role === "ADMIN") {
    return (
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={{ pathname: "../camara", query: { id: proyecto?.id } }}>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={
              proyecto?.imagen ? proyecto.imagen : "/project-image-default.jpg"
            }
            alt={proyecto?.nombre}
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {proyecto?.nombre}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {proyecto?.comentarios
              ? proyecto.comentarios
              : "Sin comentarios..."}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Creado por: {nombre}
          </p>

          <div className="flex justify-around gap-5">
            <Link
              href={{ pathname: "/proyecto/edit", query: { id: proyecto?.id } }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Editar
            </Link>
            <Link
              href={{
                pathname: "/proyecto/delete",
                query: { id: proyecto?.id },
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Borrar
            </Link>
            <Link
              href={`/proyecto/generator?id=${proyecto?.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Exportar
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={{ pathname: "../camara", query: { id: proyecto?.id } }}>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={
              proyecto?.imagen ? proyecto.imagen : "/project-image-default.jpg"
            }
            alt={proyecto?.nombre}
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {proyecto?.nombre}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {proyecto?.comentarios
              ? proyecto.comentarios
              : "Sin comentarios..."}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {proyecto?.fecha
              ?  proyecto.fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
              : "Fecha no introducida..."}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {proyecto?.localidad
              ?  proyecto.localidad
              : "Localidad no introducida..."}
          </p>

          <div className="flex justify-around gap-5">
            <Link
              href={{ pathname: "/proyecto/edit", query: { id: proyecto?.id } }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Editar
            </Link>
            <Link
              href={{
                pathname: "/proyecto/delete",
                query: { id: proyecto?.id },
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Borrar
            </Link>
            <Link
              href={`/proyecto/generator?id=${proyecto?.id}`}
              query={{ id: proyecto?.id }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Exportar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default tarjetaPrisma;
