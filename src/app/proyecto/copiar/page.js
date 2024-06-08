import React from "react";
import Tarjeta from "@/components/Tarjeta";
import FormProyecto from "@/components/Form-proyecto";
import { copiarProyecto } from "@/lib/actions-proyecto";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getIdUsuario } from "@/lib/actions-proyecto";

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
    <Tarjeta>
      <FormProyecto
        title={"Copiar Proyecto"}
        sesion={userId}
        id={Number(searchParams.id)}
        action={copiarProyecto(searchParams.id)}
        proyecto={proyecto}
      />
    </Tarjeta>
  );
}

export default page;
