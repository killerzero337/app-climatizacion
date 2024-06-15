import React from "react";
import Tarjeta from "@/components/tarjeta";
import Form from "@/components/Form-equipo";
import { newEquipo } from "@/lib/actions-equipo";
function page() {
  return (
    <Tarjeta>
      <div className="text-center mb-10">
        <h1 className="text-2xl">Crear equipo</h1>
      </div>
      <Form action={newEquipo} title={"Crear equipo"} />
    </Tarjeta>
  );
}

export default page;
