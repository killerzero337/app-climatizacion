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
          <p>
            Carga sensible de las personas (W):{" "}
            {valorOcupacionPersonas.toFixed(2)}
          </p>
          {/* <p>Carga sensible iluminación (W): {valorIluminacion}</p> */}
          {/* <p>Carga sensible renovación de aire (W): {valorrenovacionAire}</p> */}
          {/* <p>Carga total sensible refrigeración (W): {valorTotal}</p> */}
          {/* <p>Carga latente renovación de aire (W): {lat_renov}</p> */}
          {/* <p>Carga latente de las personas (W): {ocupacionLat}</p> */}
          {/* <p>Carga latente refrigeración (W): {qr_lat}</p> */}
          {/* <p>Potencia refrigeración (W): {qr.toFixed(2)}</p> */}
        </div>
      </div>
      <div className="mt-4 p-4 border rounded shadow-md w-full">
        <p className="mb-2 dark:text-orange-300 text-orange-800">Invierno</p>
        <div className="flex flex-col ">
          {/* <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p> */}
          {/* <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p> */}
        </div>
      </div>
    </Tarjeta>
  );
}

export default page;
