import { getIdUsuario, getProyectosPorId } from "@/lib/actions-proyecto";
import { getRecinto } from "@/lib/actions-camara";
import { auth } from "@/auth";

async function ListaProyectos({ recintoId, disabled }) {
  const sesion = await auth();
  const { user } = sesion;
  const userId = await getIdUsuario(user?.email);
  const proyectos = await getProyectosPorId(userId);

  console.log("RECINTO ID", recintoId);

  let recinto = null;
  let proyectoId = null;
  if (recintoId) {
    recinto = await getRecinto(recintoId);
    proyectoId = recinto?.proyectoId;
  }

  console.log("RECINTO ", recinto);
  // console.log(`PROYECTO del RECINTO ${recintoId}: `, recinto?.proyectoId);

  return (
    <fieldset>
      <legend>Proyecto asociado</legend>
      <select
        name="proyecto_id"
        // disabled={disabled}
        className="border-2 border-gray-300 rounded p-2"
      >
        {proyectos?.map((proyecto) =>
          proyecto.id == recinto?.proyectoId ? (
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
