import { getProyectos } from "@/lib/actions-proyecto";
import Tarjeta from "@/components/Tarjeta";
import CardPrisma from "@/components/tarjetaprisma";
import Link from "next/link";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

async function page() {
  const proyectos = await getProyectos();
  const sesion = await auth();
  if (sesion === null) {
    return (
      <Tarjeta>
        <div className="text-center">
          <h1 className="text-2xl">
            Para acceder a esta pagina tienes que iniciar sesión
          </h1>
        </div>
      </Tarjeta>
    );
  } else {
    return (
      <Tarjeta>
        <div className="flex flex-col items-center justify-center h-[10vh] sm:h-[10vh] text-blue-500">
          <Link
            href="/proyecto/new"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear Proyecto
          </Link>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-around">
          {proyectos.map((proyecto) => (
            <CardPrisma key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </Tarjeta>
    );
  }
}

export default page;
