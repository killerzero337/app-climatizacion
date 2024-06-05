import React from "react";
import Formcamara from "@/components/Form-camara";
import { newCamara } from "@/lib/actions-camara";
function page() {
  return (
    <div className="flex flex-col items-center justify-center text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <Formcamara title={"Nueva Camara"} action={newCamara} />
      </div>
    </div>
  );
}

export default page;
