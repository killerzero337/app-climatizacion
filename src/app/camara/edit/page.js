import React from "react";
import { editRecinto } from "@/lib/actions-camara";
import Tarjeta from "@/components/Tarjeta";
import Formcamara from "@/components/Form-camara";
import { prisma } from "@/lib/prisma";
import * as calculos from "@/lib/calculos"; //SUPER UTIL

export const dynamic = "force-dynamic";
async function page({ searchParams }) {
  const recinto = await prisma.recinto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
    include: {
      proyecto: true,
    },
  });

  const { proyecto } = recinto;

  const valorRadiacion = calculos.qv_sens_rad(
    recinto?.orientacion,
    recinto?.superficie_vidrio_c_1,
    recinto?.tipo_vidrio_c_1,
    recinto?.orientacion,
    recinto?.superficie_vidrio_c_2,
    recinto?.tipo_vidrio_c_2,
    recinto?.orientacion,
    recinto?.superficie_vidrio_c_3,
    recinto?.tipo_vidrio_c_3,
    recinto?.orientacion,
    recinto?.superficie_vidrio_c_4,
    recinto?.tipo_vidrio_c_4,
    recinto?.orientacion,
    recinto?.superficie_techo,
    recinto?.tipo_vidrio_techo
  );

  const valorTransmisibilidad = calculos.qv_sens_trans(
    proyecto,
    recinto?.ubicacion_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_c_1,
    recinto?.superficie_puertas_c_1,
    recinto?.temperatura_inv_c_1,
    recinto?.temperatura_ver_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_puertas_c_1,
    recinto?.ubicacion_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.temperatura_ver_c_2,
    recinto?.temperatura_inv_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.ubicacion_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.temperatura_ver_c_3,
    recinto?.temperatura_inv_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.ubicacion_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.temperatura_ver_c_4,
    recinto?.temperatura_inv_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.superficie_techo,
    recinto?.tipo_vidrio_techo,
    recinto?.temperatura_ver_techo,
    recinto?.temperatura_inv_techo,
    recinto?.ubicacion_suelo,
    recinto?.superficie_suelo,
    recinto?.temperatura_ver_suelo
  );

  const valorOcupacionPersonas = calculos.qv_sens_ocup(
    proyecto?.w_persona,
    proyecto?.ocupacion_personas
  );
  
  const valorrenovacionAire = calculos.qv_sens_renov(
    proyecto?.caudales_aire,
    recinto?.temp,

  );

  const valorIluminacion = calculos.qv_sens_ilum(
    proyecto?.potencia_lampara,
    recinto?.superficie_suelo,
    proyecto?.tipo_lampara
  );
  console.log(searchParams.id);
  console.log(typeof searchParams.id);
  console.log("PROYECTO ID", recinto?.proyectoId);
  return (
    <Tarjeta>
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <Formcamara
          title={"Editar recinto"}
          id={Number(searchParams.id)}
          camara={recinto}
          action={editRecinto}
          proyectoId={recinto?.proyectoId}
        />
      </div>
      <div className="mt-4 p-4 border rounded shadow-md w-full">
        <p className="mb-2 dark:text-orange-300 text-orange-800">Verano</p>
        <div className="flex flex-col ">
          <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p>
          <p>
            Cargas térmicas a través de los cerramientos (W):{" "}
            {valorTransmisibilidad}{" "}
          </p>
          <p>Carga sensible de las personas (W): {valorOcupacionPersonas.toFixed(2)}</p>
          <p>Carga sensible iluminación (W): {valorIluminacion}</p>
        </div>
      </div>
      <div className="mt-4 p-4 border rounded shadow-md w-full">
        <p className="mb-2 dark:text-orange-300 text-orange-800">Invierno</p>
        <div className="flex flex-col ">
          <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p>
          <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p>
        </div>
      </div>
    </Tarjeta>
  );
}

export default page;
