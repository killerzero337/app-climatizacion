import React from "react";
import Tarjeta from "@/components/Tarjeta";
import { deleteCamara } from "@/lib/actions-camara";
import Formcamara from "@/components/Form-camara";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
async function page({ searchParams }) {
  
  const recinto = await prisma.recinto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });
  console.log(searchParams.id);
  console.log(typeof searchParams.id);
  console.log("PROYECTO ID", recinto?.proyectoId);
  return (
    <div className="flex flex-col items-center justify-center -mt-10 text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <Formcamara
          title={"Eliminar Recinto"}
          id={Number(searchParams.id)}
          camara={recinto}
          action={deleteCamara}
          disabled={true}
          proyectoId={recinto?.proyectoId}
        />
      </div>
    </div>
  );
}

export default page;
