import React from "react";
import Boton from "@/components/boton";
export function Formcamara({
  action,
  title,
  camara,
  sesion,
  disabled = false,
  id,
}) {
  return (
    <form action={action}>
      <div className="flex flex-col items-center justify-center min-h-screen text-blue-500">
        <div className="container mx-auto p-8 border-4 border-sky-400 dark:border-sky-700 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
          <div className="flex justify-center mt-6">
            <Boton title={title} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Formcamara;
