import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import { newProyecto } from "@/lib/actions-proyecto";
function page() {
  return (
    <div className="flex flex-col items-center justify-center -mt-10 h-[420vh] sm:h-[190vh] text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <FormProyecto title={"Nuevo Proyecto"} action={newProyecto}/>
      </div>
    </div>
  );
}

export default page;
