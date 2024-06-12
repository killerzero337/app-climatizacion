import React from "react";
import Tarjeta from "@/components/Tarjeta";
import Form from "@/components/Form-equipo";
import { deleteEquipo } from "@/lib/actions-equipo";
function page({ searchParams }) {
  console.log(searchParams?.equipo_id);
  console.log(typeof searchParams?.equipo_id);
  return (
    <Tarjeta>
      <div className="text-center mb-10">
        <h1 className="text-2xl">Crear equipo</h1>
      </div>
      <Form
        id={Number(searchParams?.id)}
        action={deleteEquipo}
        title={"Eliminar equipo"}
        equipoId={Number(searchParams?.equipo_id)}
        disabled={true}
      />
    </Tarjeta>
  );
}

export default page;
