import React from "react";
import FormProyecto from "@/components/Form-proyecto";
import Tarjeta from "@/components/Tarjeta";
function page() {
  return (
    <div className="flex flex-col items-center justify-center h-[230vh] sm:h-[90vh] text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <FormProyecto />
      </div>
    </div>
  );
}

export default page;
