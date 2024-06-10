import Tarjeta from "@/components/Tarjeta";
import Link from "next/link";
import { getProyecto } from "@/lib/actions-proyecto";
import CamaraTarjeta from "@/components/tarjetaPrismacamara";
export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const proyecto = await getProyecto(searchParams.id);
  console.log("PROYECTO", proyecto);
  const { recintos } = proyecto; // desestructuracion

  const mediaSuperficieSuelo =
    recintos.reduce((total, recintos) => total + recintos.superficie_suelo, 0) /
    recintos.length;
  console.log("MEDIA", mediaSuperficieSuelo);

  return (
    <Tarjeta>
      <div className="flex justify-center mb-6">
        <Link
          href="/camara/new"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear recinto
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center">
        {recintos.map((recinto) => (
          <CamaraTarjeta key={recinto.id} camara={recinto} />
        ))}
      </div>
    </Tarjeta>
  );
}

export default Page;
