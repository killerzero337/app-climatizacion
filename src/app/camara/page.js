import Tarjeta from "@/components/Tarjeta";
import Link from "next/link";
import { getProyecto } from "@/lib/actions-proyecto";
import { getProyectoEquipo } from "@/lib/actions-equipo";
import CamaraTarjetaCamara from "@/components/tarjetaPrismacamara";
import CamaraTarjetaEquipo from "@/components/tarjetaPrismaEquipo";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const proyecto = await getProyecto(searchParams.id);
  console.log("PROYECTO", proyecto);
  const { recintos } = proyecto; // desestructuracion es super mega util
  const proyectoEquipo = await getProyectoEquipo(searchParams.id);
  const { equipos } = proyectoEquipo; // desestructuracion

  if (!proyecto) {
    redirect("/proyectos");
  }

  return (
    <Tarjeta>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl mb-2">Camaras</h1>
      </div>
      <div className="flex justify-center mb-6 gap-5">
        <Link
          href="/camara/new"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear recinto
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center mb-10">
        {recintos.map((recinto) => (
          <CamaraTarjetaCamara key={recinto.id} camara={recinto} />
        ))}
      </div>
      <div className="mt-4 p-4 border rounded shadow-md">
        <h1 className="font-bold text-3xl text-center mb-10">Equipos</h1>
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
            <CamaraTarjetaEquipo key={otrosEquipos.id} equipo={otrosEquipos} />
          ))}
        </div>
      </div>
    </Tarjeta>
  );
}

export default Page;
