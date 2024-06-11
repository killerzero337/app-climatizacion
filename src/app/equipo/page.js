import Tarjeta from "@/components/Tarjeta";
import Link from "next/link";
import { getProyectoEquipo } from "@/lib/actions-equipo";
import CamaraTarjeta from "@/components/tarjetaPrismaEquipo";
export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const proyecto = await getProyectoEquipo(searchParams.id);
  console.log("PROYECTO", proyecto);
  const { equipos } = proyecto; // desestructuracion

  return (
    <Tarjeta>
      <div className="flex justify-center mb-6">
        <Link
          href="/equipo/new"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear Equipo
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center">
        {equipos.map((otrosEquipos) => (
          <CamaraTarjeta key={otrosEquipos.id} camara={otrosEquipos} />
        ))}
      </div>
    </Tarjeta>
  );
}

export default Page;
