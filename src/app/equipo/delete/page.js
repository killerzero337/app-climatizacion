import React from "react";
import Tarjeta from "@/components/Tarjeta";
import Form from "@/components/Form-equipo";
import { deleteEquipo } from "@/lib/actions-equipo";
function page({ searchParams }) {
  return (
    <Tarjeta>
      <div className="text-center mb-10">
        <h1 className="text-2xl">Crear equipo</h1>
      </div>
      <Form
        action={deleteEquipo}
        title={"Eliminar equipo"}
        equipoId={searchParams?.equipo_id}
        disabled={true}
      />
    </Tarjeta>
  );
}

export default page;
