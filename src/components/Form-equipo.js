import React, { Suspense } from "react";
import Boton from "@/components/boton";
import ListaProyectos from "@/components/listaProyectoEquipo";
import Spinner from "@/components/spinner";
async function formEquipo({ action, title, equipo, disabled = false, id }) {
  return (
    <form action={action}>
      <input type="hidden" name="id" defaultValue={id} />
      <fieldset disabled={disabled}>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-2">
            <label className="flex items-center">Nombre:</label>
            <input
              type="text"
              name="nombre"
              defaultValue={equipo?.nombre}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="mb-2">
            <label className="flex items-center">Potencia (W)</label>
            <input
              type="number"
              name="potencia_w"
              defaultValue={Number(equipo?.potencia)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">Factor funcimiento (%):</label>
            <input
              type="number"
              name="factor_funcionamiento"
              defaultValue={Number(equipo?.factor_funcionamiento)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
        </div>
      </fieldset>
      <div className="flex justify-center mb-10">
        <Suspense fallback={<Spinner />}>
          <ListaProyectos equipoId={equipo?.id} disabled={disabled} />
        </Suspense>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Boton title={title} />
      </div>
    </form>
  );
}

export default formEquipo;
