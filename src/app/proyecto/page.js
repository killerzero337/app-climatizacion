import {
  getProyectosPorId,
  getIdUsuario,
  getProyectos,
} from "@/lib/actions-proyecto";
import Tarjeta from "@/components/Tarjeta";
import CardPrisma from "@/components/tarjetaprisma";
import Link from "next/link";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

async function page() {
  const sesion = await auth();
  const { user } = sesion;
  console.log("USUARIO ACTUAL: " + user?.email);
  const userId = await getIdUsuario(user?.email);
  console.log("ID del usuario:" + userId);
  const busqueda = "";
  const proyectos = await getProyectosPorId(userId);

  if (sesion?.user.role === "ADMIN") {
    const proyectos = await getProyectos();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-blue-500">
        <div className="container mx-auto p-8 border-4 border-sky-400 dark:border-sky-700 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
          <div className="flex justify-center mb-6">
            <Link
              href="/proyecto/new"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear Proyecto
            </Link>
            <input
              className="ml-5 text-center"
              defaultValue={busqueda}
              placeholder="Busqueda de proyectos"
            ></input>
          </div>
          <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center">
            {proyectos.map((proyecto) => (
              <CardPrisma key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (sesion === null) {
    return (
      <Tarjeta>
        <div className="text-center">
          <h1 className="text-2xl">
            Para acceder a esta página tienes que iniciar sesión
          </h1>
        </div>
      </Tarjeta>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-blue-500">
        <div className="container mx-auto p-8 border-4 border-sky-400 dark:border-sky-700 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
          <div className="flex justify-center mb-6 gap-4">
            <Link
              href="/proyecto/new"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear Proyecto
            </Link>
            
            <Link
              href="/equipo/new"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear equipo
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center">
            {proyectos.map((proyecto) => (
              <CardPrisma key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default page;
