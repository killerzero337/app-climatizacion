import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import { editProyecto, getIdUsuario } from "@/lib/actions-proyecto";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function page({ searchParams }) {
  const sesion = await auth();
  const { user } = sesion;
  const proyecto = await prisma.proyecto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });
  console.log("USUARIO ACTUAL: " + user?.email);
  const userId = await getIdUsuario(user?.email);
  console.log("ID del usuario:" + userId);
  return (
    <div className="flex flex-col items-center justify-center -mt-10 text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center p-10">
            EDITANDO PROYECTO
          </h1>
          <div className="flex justify-center align-items-center">
            <Link
              href={{
                pathname: "/proyecto/ayuda",
              }}
              target="_blank"
              className="dark:text-blue-100 text-blue-500 text animate-pulse"
            >
              Si necesita ayuda consulte este enlace.
            </Link>
          </div>
        </div>
        <FormProyecto
          title={"Editar Proyecto"}
          sesion={userId}
          id={searchParams.id}
          action={editProyecto}
          proyecto={proyecto}
        />
      </div>
    </div>
  );
}

export default page;
