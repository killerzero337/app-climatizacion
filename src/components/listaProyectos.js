import { getIdUsuario, getProyectosPorId } from "@/lib/actions-proyecto";
import { getRecinto } from "@/lib/actions-camara";
import { auth } from "@/auth";
async function ListaProyectos({ recintoId, disabled }) {
  const sesion = await auth();
  const { user } = sesion;
  const userId = await getIdUsuario(user?.email);
  const proyectos = await getProyectosPorId(userId);

  let recinto = null;
  let proyectoId = null;
  if (recintoId) {
    recinto = await getRecinto(recintoId);
    proyectoId = recinto?.proyectoId;
  }

  console.log(`PROYECTO del RECINTO ${recintoId}: `, proyectoId);

  return (
    <fieldset disabled={disabled}>
      <legend>Proyectos</legend>
      <select
        name="proyectoId"
        defaultValue={proyectoId || ""}
        disabled={disabled}
        className="border-2 border-gray-300 rounded p-2"
      >
        <option value="" disabled>
          Seleccione un proyecto
        </option>
        {proyectos?.map((proyecto) => (
          <option key={proyecto.id} value={proyecto.id}>
            {proyecto.nombre}
          </option>
        ))}
      </select>
    </fieldset>
  );
}

export default ListaProyectos;
