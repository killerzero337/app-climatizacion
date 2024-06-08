import Imagen from "@/components/imagen";
import Boton from "@/components/boton";

export function FormProyecto({
  action,
  title,
  id,
  proyecto,
  sesion,
  disabled = false,
}) {
  console.log("Numero de proyecto (prop):", id);
  console.log("Proyecto:", proyecto);
  console.log("Tipo de dato de proyecto?.id:", typeof proyecto?.id);
  console.log("Sesion:", sesion);

  const proyectoId = proyecto?.id || id;
  const usuarioId = proyecto?.userId || sesion;

  console.log("ID utilizado en el input hidden:", proyectoId);
  console.log("Usuario ID utilizado en el input hidden:", usuarioId);

  return (
    <form action={action}>
      <input type="hidden" name="id" defaultValue={proyectoId} />
      <input type="hidden" name="usuario_id" defaultValue={usuarioId} />
      <fieldset disabled={disabled}>
        <div className="flex flex-col md:flex-row justify-around">
          <div>
            <label className="block">Nombre de proyecto:</label>
            <input
              className="border-2 border-black rounded p-2 w-full"
              type="text"
              name="nombre"
              placeholder="Nombre del proyecto"
              defaultValue={proyecto?.nombre}
            />
          </div>
          <div className="relative">
            <label className="block">Localidad:</label>

            <input
              className="border-2 border-black rounded p-2 w-full"
              type="text"
              name="localidad"
              placeholder="Introduce una localidad"
              defaultValue={proyecto?.localidad}
            />
          </div>
          <div>
            <label className="block">Fecha de Proyecto:</label>
            <input
              className="border-2 border-black rounded p-2 w-full"
              type="date"
              name="fecha"
              defaultValue={proyecto?.fecha?.toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura (Verano):
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de temperatura verano"
                />
              </label>
              <input
                type="number"
                name="temp_ext_ver"
                min={"-100"}
                max={"100"}
                defaultValue={Number(proyecto?.temp_ext_ver)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Humedad (Verano):
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de humedad verano"
                />
              </label>
              <input
                type="number"
                name="hr_ext_ver"
                min={"0"}
                max={"100"}
                defaultValue={Number(proyecto?.hr_ext_ver)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura (Invierno):
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de temperatura invierno"
                />
              </label>
              <input
                type="number"
                name="temp_ext_inv"
                min={"-100"}
                max={"100"}
                defaultValue={Number(proyecto?.temp_ext_inv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Humedad (Invierno):
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de humedad invierno"
                />
              </label>
              <input
                type="number"
                name="hr_ext_inv"
                min={"0"}
                max={"100"}
                defaultValue={Number(proyecto?.hr_ext_inv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Altitud:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de altitud"
                />
              </label>
              <input
                type="number"
                name="altitud"
                min={"0"}
                max={"10000"}
                defaultValue={Number(proyecto?.altitud)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Zona climatica:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de zona climatica"
                />
              </label>
              <select
                name="zona_climatica"
                defaultValue={proyecto?.zona_climatica}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">
                us/um:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de us/um"
                />
              </label>
              <input
                type="number"
                name="us_um"
                min={"0"}
                max={"1"}
                step="0.01"
                defaultValue={Number(proyecto?.us_um)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                uc:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de uc"
                />
              </label>
              <input
                type="number"
                name="uc"
                min={"0"}
                max={"1"}
                step="0.01"
                defaultValue={Number(proyecto?.uc)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                ut/umd:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de ut/umd"
                />
              </label>
              <input
                type="number"
                name="ut_umd"
                min={"0"}
                max={"1"}
                step="0.01"
                defaultValue={Number(proyecto?.ut_umd)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                uh:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de uh"
                />
              </label>
              <input
                type="number"
                name="uh"
                min={"1"}
                max={"4"}
                step="0.01"
                defaultValue={Number(proyecto?.uh)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                up:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de up"
                />
              </label>
              <input
                type="number"
                name="up"
                min={"4"}
                max={"6"}
                step="0.01"
                defaultValue={Number(proyecto?.up)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                uph:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de uph"
                />
              </label>
              <input
                type="number"
                name="uph"
                step="0.01"
                defaultValue={Number(proyecto?.uph)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                upv:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de upv"
                />
              </label>
              <input
                type="number"
                name="upv"
                step="0.01"
                defaultValue={Number(proyecto?.upv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                uphv:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de uphv"
                />
              </label>
              <input
                type="number"
                name="uphv"
                step="0.01"
                defaultValue={Number(proyecto?.uphv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>

          <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="mb-2">
              <label className="flex items-center">
                TPH:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de TPH"
                />
              </label>
              <input
                type="number"
                name="tph"
                min={"0.5"}
                max={"2.5"}
                step="0.01"
                defaultValue={Number(proyecto?.tph)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                TPV:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de TPV"
                />
              </label>
              <input
                type="number"
                name="tpv"
                min={"0.1"}
                max={"2.5"}
                step="0.01"
                defaultValue={Number(proyecto?.tpv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                TPHV:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de TPV / TPH"
                />
              </label>
              <input
                type="number"
                name="tphv"
                min={"0.1"}
                max={"2"}
                step="0.01"
                defaultValue={Number(proyecto?.tphv)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
          <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="mb-2">
              <label className="flex items-center">
                Numero personas:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Numero de personas"
                />
              </label>
              <input
                type="number"
                name="numero_personas"
                step="1"
                max="1000"
                min="0"
                defaultValue={Number(proyecto?.numero_personas)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Ocupacion de las personas:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Este campo identifica la ocupacion de las personas"
                />
              </label>
              <select
                name="ocupacion_personas"
                defaultValue={proyecto?.ocupacion_personas}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="sedentario">Sedentaria</option>
                <option value="activo">Activa</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                W por persona:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="w por persona"
                />
              </label>
              <input
                type="number"
                name="w_persona"
                step="0.01"
                defaultValue={Number(proyecto?.w_persona)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Caudales por IDA:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Caudales por IDA"
                />
              </label>
              <input
                type="number"
                name="caudales_ida"
                step="0.01"
                defaultValue={Number(proyecto?.caudales_ida)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Caudales de aire m3:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Caudales de aire m3"
                />
              </label>
              <input
                type="number"
                name="caudales_aire"
                step="0.01"
                defaultValue={Number(proyecto?.caudales_aire)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Tipo lamapara:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Permite introducir el tipo de lampara"
                />
              </label>
              <select
                name="tipo_lampara"
                defaultValue={proyecto?.tipo_lampara}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="fluorescente">Fluorescente</option>
                <option value="led">LED</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Potencia luminica:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Permite introducir la potencia luminica"
                />
              </label>
              <input
                type="number"
                name="potencia_lampara"
                step="0.01"
                defaultValue={Number(proyecto?.potencia_lampara)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Factor seguridad:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Permite introducir el valor de seguridad"
                />
              </label>
              <input
                type="number"
                name="valor_seguridad"
                defaultValue={Number(proyecto?.valor_seguridad)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Carga latente:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="permite introducir el valor de carga latente"
                />
              </label>
              <input
                type="number"
                name="carga_latente"
                defaultValue={Number(proyecto?.carga_latente)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                ODA:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Valor de ODA"
                />
              </label>
              <select
                name="oda"
                defaultValue={proyecto?.oda}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="oda1">oda1</option>
                <option value="oda2">oda2</option>
                <option value="oda3">oda3</option>
              </select>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded shadow-md">
            <div className="mb-2">
              <label className="flex items-center">
                Comentarios:
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title="Añadir comentario"
                />
              </label>

              <textarea
                name="comentarios"
                placeholder="Comentarios"
                title="Añadir comentario del proyecto"
                maxLength={300}
                defaultValue={proyecto?.comentarios}
                className="border-2 border-gray-300 rounded p-2 w-full h-24"
              />
            </div>
          </div>
          <div className="mt-4 p-4 border rounded shadow-md">
            <div className="mb-2">
              <label className="flex items-center">Imagen del proyecto:</label>
              <div className="flex justify-center h-72 w-full">
                <Imagen
                  img={proyecto?.imagen ?? "/project-image-default.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="flex justify-center mt-6">
        <Boton title={title} />
      </div>
    </form>
  );
}

export default FormProyecto;
