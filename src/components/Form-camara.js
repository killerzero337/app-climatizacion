import React, { Suspense } from "react";
import Boton from "@/components/boton";
import ListaProyectos from "@/components/listaProyectos";
import Spinner from "@/components/spinner";
export function Formcamara({
  action,
  title,
  camara,
  proyectoId,
  disabled = false,
  id,
}) {
  return (
    <form action={action}>
      <input type="hidden" name="proyecto_id" defaultValue={proyectoId} />
      <input type="hidden" name="id" defaultValue={id} />
      <fieldset disabled={disabled}>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-2 content-center">
            <label className="flex items-center">Nombre del recinto:</label>
            <input
              type="text"
              name="nombre"
              maxLength={50}
              defaultValue={camara?.nombre}
              className="border-2 border-gray-300 rounded p-2"
            />
          </div>
        </div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura relativa (Verano):
              </label>
              <input
                type="number"
                name="t_ver_relativa"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.t_ver_relativa)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Humedad relativa (Verano):
              </label>
              <input
                type="number"
                name="hr_ver_relativa"
                min={"30"}
                max={"70"}
                defaultValue={Number(camara?.hr_ver_relativa)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura relativa (Invierno):
              </label>
              <input
                type="number"
                name="t_inv_relativa"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.t_inv_relativa)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Humedad relativa (Invierno):
              </label>
              <input
                type="number"
                name="hr_inv_relativa"
                min={"30"}
                max={"70"}
                defaultValue={Number(camara?.hr_inv_relativa)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Longitud:</label>
              <input
                type="number"
                name="longitud"
                defaultValue={Number(camara?.longitud)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Anchura:</label>
              <input
                type="number"
                name="anchura"
                defaultValue={Number(camara?.anchura)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Altura:</label>
              <input
                type="number"
                name="altura"
                defaultValue={Number(camara?.altura)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Volumen:</label>
              <input
                type="number"
                name="volumen"
                defaultValue={Number(camara?.volumen)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                IDA:{" "}
                <img
                  src="/question.svg"
                  className="ml-2 w-5 h-5"
                  alt="info"
                  title={`
                  IDA 1: (aire de óptima calidad): hospitales, clínicas, laboratorios y guarderías.${""}
                  IDA 2: (aire de buena calidad): oficinas, residencias, salas de lectura, museos, salas de tribunales, aulas de enseñanza y piscinas. ${""} 
                  IDA 3: (aire de calidad media): edificios comerciales, cines, teatros, salones de actos, habitaciones de hoteles, restaurantes y bares, 
                  gimnasios, locales para el deporte y salas de ordenadores. ${""}
                  IDA 4: (aire de calidad baja).`}
                />
              </label>
              <select
                name="ida"
                defaultValue={camara?.ida}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="ida1">IDA 1</option>
                <option value="ida2">IDA 2</option>
                <option value="ida3">IDA 3</option>
                <option value="ida4">IDA 4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-2">Cerramiento 1:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">Orientacion: </label>
              <select
                name="orientacion"
                defaultValue={camara?.orientacion}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="norte">Norte</option>
                <option value="sur">Sur</option>
                <option value="este">Este</option>
                <option value="oeste">Oeste</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_c_1"
                defaultValue={camara?.ubicacion_c_1}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Verano):
              </label>
              <input
                type="number"
                name="temperatura_ver_c_1"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_ver_c_1)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Invierno):
              </label>
              <input
                type="number"
                name="temperatura_inv_c_1"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_inv_c_1)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie cerramiento (m2):
              </label>
              <input
                type="number"
                name="superficie_c_1"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_c_1)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Tipo de vidrio:</label>
              <select
                name="tipo_vidrio_c_1"
                defaultValue={camara?.tipo_vidrio_c_1}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="baja_emisividad">Baja emisividad</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie vidrio:</label>
              <input
                type="number"
                name="superficie_vidrio_c_1"
                defaultValue={Number(camara?.superficie_vidrio_c_1)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie Puertas:</label>
              <input
                type="number"
                name="superficie_puertas_c_1"
                min={"0"}
                max={"100"}
                defaultValue={Number(camara?.superficie_puertas_c_1)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">Cerramiento 2:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_c_2"
                defaultValue={camara?.ubicacion_c_2}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Verano):
              </label>
              <input
                type="number"
                name="temperatura_ver_c_2"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_ver_c_2)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Invierno):
              </label>
              <input
                type="number"
                name="temperatura_inv_c_2"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_inv_c_2)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie cerramiento (m2):
              </label>
              <input
                type="number"
                name="superficie_c_2"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_c_2)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Tipo de vidrio:</label>
              <select
                name="tipo_vidrio_c_2"
                defaultValue={camara?.tipo_vidrio_c_2}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="baja_emisividad">Baja emisividad</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie vidrio:</label>
              <input
                type="number"
                name="superficie_vidrio_c_2"
                defaultValue={Number(camara?.superficie_vidrio_c_2)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie Puertas:</label>
              <input
                type="number"
                name="superficie_puertas_c_2"
                min={"0"}
                max={"100"}
                defaultValue={Number(camara?.superficie_puertas_c_2)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">Cerramiento 3:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_c_3"
                defaultValue={camara?.ubicacion_c_3}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Verano):
              </label>
              <input
                type="number"
                name="temperatura_ver_c_3"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_ver_c_3)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Invierno):
              </label>
              <input
                type="number"
                name="temperatura_inv_c_3"
                min={"-100"}
                max={"100"}
                defaultValue={Number(camara?.temperatura_inv_c_3)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie cerramiento (m2):
              </label>
              <input
                type="number"
                name="superficie_c_3"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_c_3)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Tipo de vidrio:</label>
              <select
                name="tipo_vidrio_c_3"
                defaultValue={camara?.tipo_vidrio_c_3}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="baja_emisividad">Baja emisividad</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie vidrio:</label>
              <input
                type="number"
                name="superficie_vidrio_c_3"
                defaultValue={Number(camara?.superficie_vidrio_c_3)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie Puertas:</label>
              <input
                type="number"
                name="superficie_puertas_c_3"
                min={"0"}
                max={"100"}
                defaultValue={Number(camara?.superficie_puertas_c_3)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">Cerramiento 4:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_c_4"
                defaultValue={camara?.ubicacion_c_4}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Verano):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_ver_c_4"
                defaultValue={Number(camara?.temperatura_ver_c_4)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura cerramiento (Invierno):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_inv_c_4"
                defaultValue={Number(camara?.temperatura_inv_c_4)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie cerramiento (m2):
              </label>
              <input
                type="number"
                name="superficie_c_4"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_c_4)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Tipo de vidrio:</label>
              <select
                name="tipo_vidrio_c_4"
                defaultValue={camara?.tipo_vidrio_c_4}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="baja_emisividad">Baja emisividad</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie vidrio:</label>
              <input
                type="number"
                name="superficie_vidrio_c_4"
                defaultValue={Number(camara?.superficie_vidrio_c_4)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">Superficie Puertas:</label>
              <input
                type="number"
                name="superficie_puertas_c_4"
                min={"0"}
                max={"100"}
                defaultValue={Number(camara?.superficie_puertas_c_4)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">Suelo:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_suelo"
                defaultValue={camara?.ubicacion_suelo}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura techo (Verano):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_ver_suelo"
                defaultValue={Number(camara?.temperatura_ver_suelo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura techo (Invierno):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_inv_suelo"
                defaultValue={Number(camara?.temperatura_inv_suelo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie techo (m2):
              </label>
              <input
                type="number"
                name="superficie_suelo"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_suelo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">Techo:</div>
        <div className="mt-4 p-4 border rounded shadow-md">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="mb-2">
              <label className="flex items-center">
                Orientacion del techo:
              </label>
              <select
                name="orientacion_techo"
                defaultValue={camara?.orientacion_techo}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="norte">Norte</option>
                <option value="sur">Sur</option>
                <option value="este">Este</option>
                <option value="oeste">Oeste</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">Ubicacion:</label>{" "}
              <select
                name="ubicacion_techo"
                defaultValue={camara?.ubicacion_techo}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Temperatura techo (Verano):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_ver_techo"
                defaultValue={Number(camara?.temperatura_ver_techo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="mb-2">
              <label className="flex items-center">
                Temperatura techo (Invierno):
              </label>
              <input
                type="number"
                min={"-100"}
                max={"100"}
                name="temperatura_inv_techo"
                defaultValue={Number(camara?.temperatura_inv_techo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">
                Superficie techo (m2):
              </label>
              <input
                type="number"
                name="superficie_techo"
                min={"0"}
                max={"100"}
                step={"0.01"}
                defaultValue={Number(camara?.superficie_techo)}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="flex items-center">Tipo de vidrio:</label>
              <select
                name="tipo_vidrio_techo"
                defaultValue={camara?.tipo_vidrio_techo}
                className="border-2 border-gray-300 rounded p-2 w-full"
              >
                <option value="normal">Normal</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="baja_emisividad">Baja emisividad</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>
      <Suspense fallback={<Spinner />}>
        <ListaProyectos proyectoId={camara?.proyectoId} disabled={disabled} />
      </Suspense>
      <div className="flex justify-center items-center mt-4">
        <Boton title={title} />
      </div>
    </form>
  );
}

export default Formcamara;
