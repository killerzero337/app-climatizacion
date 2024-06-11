import React from "react";

function formEquipo({
  action,
  title,
  equipo,
  proyectoId,
  disabled = false,
  id,
}) {
  console.log("equipo ", equipo);
  return (
    <form action={action}>
      <input type="hidden" name="id" defaultValue={id} />
      <fieldset disabled={disabled}></fieldset>
      <Suspense fallback={<Spinner />}>
        <ListaProyectos recintoId={camara?.id} disabled={disabled} />
      </Suspense>
      <div className="flex justify-center items-center mt-4">
        <Boton title={title} />
      </div>
    </form>
  );
}

export default formEquipo;
