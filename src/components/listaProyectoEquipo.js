import { getIdUsuario, getProyectosPorId } from "@/lib/actions-proyecto";
import { getEquipoId } from "@/lib/actions-equipo";
import { auth } from "@/auth";

async function ListaProyectos({ equipoId, disabled }) {
  const sesion = await auth();
  const { user } = sesion;
  const userId = await getIdUsuario(user?.email);
  const proyectos = await getProyectosPorId(userId);

  console.log("RECINTO ID", equipoId);

  let equipo = null;
  let proyectoId = null;
  if (equipoId) {
    equipo = await getEquipoId(equipoId);
    proyectoId = equipo?.proyectoId;
  }

  console.log("RECINTO ", equipo);
  // console.log(`PROYECTO del RECINTO ${recintoId}: `, recinto?.proyectoId);

  return (
    <fieldset disabled={disabled}>
      <legend>Proyecto asociado</legend>
      <select
        name="proyecto_id"
        disabled={disabled}
        className="border-2 border-gray-300 rounded p-2"
      >
        {proyectos?.map((proyecto) =>
          proyecto.id == equipo?.proyectoId ? (
            <option key={proyecto.id} value={proyecto.id} selected>
              {" "}
              {proyecto.nombre}{" "}
            </option>
          ) : (
            <option key={proyecto.id} value={proyecto.id}>
              {" "}
              {proyecto.nombre}{" "}
            </option>
          )
        )}
      </select>
    </fieldset>
  );
}

export default ListaProyectos;
