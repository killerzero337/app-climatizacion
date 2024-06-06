import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import { newProyecto, getIdUsuario } from "@/lib/actions-proyecto";
import { auth } from "@/auth";
import Link from "next/link";
async function page() {
  const sesion = await auth();
  const { user } = sesion;
  console.log("USUARIO ACTUAL: " + user?.email);
  const userId = await getIdUsuario(user?.email);
  console.log("ID del usuario:" + userId);
  return (
    <div className="flex flex-col items-center justify-center text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center p-10">
            NUEVO PROYECTO
          </h1>
          <div className="flex justify-center align-items-center">
            <Link
              href={{
                pathname: "/proyecto/ayuda",
              }}
              target="_blank"
              className="text-blue-100 animate-pulse"
            >
              Si necesita ayuda consulte este enlace.
            </Link>
          </div>
        </div>
        <FormProyecto
          title={"Nuevo Proyecto"}
          sesion={userId}
          action={newProyecto}
        />
      </div>
    </div>
  );
}

export default page;
