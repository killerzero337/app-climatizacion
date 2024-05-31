import Imagen from "@/components/imagen";
import Boton from "@/components/boton";

export function FormProyecto({
  action,
  title,
  proyecto,
  sesion,
  disabled = false,
}) {

  return (
    
      <form action={action}>
          <input type="hidden" name='id' defaultValue={proyecto?.id} />
          <input
            type="hidden"
            name="usuario_id"
            defaultValue={proyecto?.userId || sesion}
          />
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
                </label>
                <input
                  type="number"
                  name="temp_ext_ver"
                  step="0.01"
                  defaultValue={Number(proyecto?.temp_ext_ver)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Humedad (Verano):</label>
                <input
                  type="number"
                  name="hr_ext_ver"
                  defaultValue={Number(proyecto?.hr_ext_ver)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">
                  Temperatura (Invierno):
                </label>
                <input
                  type="number"
                  name="temp_ext_inv"
                  step="0.01"
                  defaultValue={Number(proyecto?.temp_ext_inv)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Humedad (Invierno):</label>
                <input
                  type="number"
                  name="hr_ext_inv"
                  defaultValue={Number(proyecto?.hr_ext_inv)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Altitud:</label>
                <input
                  type="number"
                  name="altitud"
                  defaultValue={Number(proyecto?.altitud)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Zona climatica:</label>
                <input
                  type="text"
                  name="zona_climatica"
                  defaultValue={proyecto?.zona_climatica}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>

            <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="mb-2">
                <label className="flex items-center">us/um:</label>
                <input
                  type="number"
                  name="us_um"
                  step="0.01"
                  defaultValue={Number(proyecto?.us_um)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">uc:</label>
                <input
                  type="number"
                  name="uc"
                  step="0.01"
                  defaultValue={Number(proyecto?.uc)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">ut/umd:</label>
                <input
                  type="number"
                  name="ut_umd"
                  step="0.01"
                  defaultValue={Number(proyecto?.ut_umd)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">uh:</label>
                <input
                  type="number"
                  name="uh"
                  step="0.01"
                  defaultValue={Number(proyecto?.uh)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">up:</label>
                <input
                  type="number"
                  name="up"
                  step="0.01"
                  defaultValue={Number(proyecto?.up)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">uph:</label>
                <input
                  type="number"
                  name="uph"
                  step="0.01"
                  defaultValue={Number(proyecto?.uph)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">upv:</label>
                <input
                  type="number"
                  name="upv"
                  step="0.01"
                  defaultValue={Number(proyecto?.upv)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">uphv:</label>
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
                <label className="flex items-center">TPH:</label>
                <input
                  type="number"
                  name="tph"
                  step="0.01"
                  defaultValue={Number(proyecto?.tph)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">TPV:</label>
                <input
                  type="number"
                  name="tpv"
                  step="0.01"
                  defaultValue={Number(proyecto?.tpv)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">TPHV:</label>
                <input
                  type="number"
                  name="tphv"
                  step="0.01"
                  defaultValue={Number(proyecto?.tphv)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="mb-2">
                <label className="flex items-center">Numero personas:</label>
                <input
                  type="number"
                  name="numero_personas"
                  step="0.01"
                  defaultValue={Number(proyecto?.numero_personas)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">W por persona:</label>
                <input
                  type="number"
                  name="w_persona"
                  step="0.01"
                  defaultValue={Number(proyecto?.w_persona)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Caudales por IDA:</label>
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
                <label className="flex items-center">Tipo lamapara:</label>
                <select
                  name="tipo_lampara"
                  defaultValue={Number(proyecto?.tipo_lampara)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                >
                  <option value="fluorescente">Fluorescente</option>
                  <option value="led">LED</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="flex items-center">Potencia luminica:</label>
                <input
                  type="number"
                  name="potencia_lampara"
                  step="0.01"
                  defaultValue={Number(proyecto?.potencia_lampara)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Factor seguridad:</label>
                <input
                  type="number"
                  name="valor_seguridad"
                  defaultValue={Number(proyecto?.valor_seguridad)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Carga latente:</label>
                <input
                  type="number"
                  name="carga_latente"
                  defaultValue={Number(proyecto?.carga_latente)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="mb-2">
                <label className="flex items-center">Longitud:</label>
                <input
                  type="number"
                  name="longitud"
                  defaultValue={Number(proyecto?.longitud)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Anchura:</label>
                <input
                  type="number"
                  name="anchura"
                  defaultValue={Number(proyecto?.anchura)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Altura:</label>
                <input
                  type="number"
                  name="altura"
                  defaultValue={Number(proyecto?.altura)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center">Volumen:</label>
                <input
                  type="number"
                  name="volumen"
                  defaultValue={Number(proyecto?.volumen)}
                  className="border-2 border-gray-300 rounded p-2 w-full"
                />
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
                <label className="flex items-center">
                  Imagen del proyecto:
                </label>
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
