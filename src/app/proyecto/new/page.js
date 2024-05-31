import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import { newProyecto, getIdUsuario } from "@/lib/actions-proyecto";
import { auth } from "@/auth";

async function page() {
  const sesion = await auth();
  const { user } = sesion;
  console.log("USUARIO ACTUAL: " + user?.email);
  const userId = await getIdUsuario(user?.email);
  console.log("ID del usuario: " + userId);
  return (
    <div className="flex flex-col items-center justify-center text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
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
