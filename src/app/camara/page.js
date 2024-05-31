import React from "react";
import TarjetaPrismacamara from "@/components/tarjetaPrismacamara";
export const dynamic = "force-dynamic";

async function page() {
  return (
    <div className="flex flex-col items-center justify-center -mt-10 h-[300vh] sm:h-[100vh] text-blue-500">
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <div className="flex justify-center mb-6">
          <Link
            href="/camara/new"
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear Proyecto
          </Link>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <TarjetaPrismacamara 
          />
        </div>
      </div>
    </div>
  );
}

export default page;
