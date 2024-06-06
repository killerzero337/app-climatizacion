import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import { deleteProyecto, getIdUsuario } from "@/lib/actions-proyecto";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

async function page({ searchParams }) {
  const sesion = await auth();
  const { user } = sesion;
  const proyecto = await prisma.proyecto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });
  console.log(searchParams.id);
  console.log(typeof searchParams.id);
  console.log("USUARIO ACTUAL: " + user?.email);
  const userId = await getIdUsuario(user?.email);
  console.log("ID del usuario:" + userId);
  return (
    <div className="flex flex-col items-center justify-center -mt-10 text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <FormProyecto
          title={"Eliminar Proyecto"}
          sesion={userId}
          id={Number(searchParams.id)}
          action={deleteProyecto}
          proyecto={proyecto}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default page;
