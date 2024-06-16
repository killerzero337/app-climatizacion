import React from "react";
import Tarjeta from "@/components/Tarjeta";
function page() {
  return (
    <Tarjeta>
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Si tienes alguna pregunta o comentario, no dudes en ponerte en
            contacto con nosotros a través de nuestras redes sociales:
          </p>
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="https://github.com/killerzero337"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="https://www.instagram.com/killerzero37/"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-4">
            También puedes contactarnos por correo electrónico:
          </p>
          <p className="text-blue-500 hover:text-blue-700 transition duration-300">
            <a href="mailto:garrridocurso37@gmail.com">
              garrridocurso37@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Tarjeta>
  );
}

export default page;
