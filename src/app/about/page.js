import Tarjeta from "@/components/Tarjeta";
function About() {
  return (
    <Tarjeta>
      <div className="text-stone-500 container  items-center border-4 p-2 rounded-md bg-gray-200/80">
        <h1 className=" text-[4vh]">Sobre mí:</h1>
        <p className=" text-[2vh]">
          ¡Hola, soy Jose Manuel Garrido González, un desarrollador junior
          apasionado. Enfoco mi energía en crear una aplicacion web para el
          ciclo de climatologia utilizando Next.js y Tailwind. ¡Busco
          simplificar y enriquecer la experiencia de juego! Cada línea de código
          es un paso en mi aprendizaje, ¡y estoy emocionado por compartir esta
          aventura contigo! 🚀
          <div className="container bg-contain rounded-[50%] bg-no-repeat bg-center bg-[url('/icono.png')] w-full h-72"></div>
        </p>
      </div>
    </Tarjeta>
  );
}

export default About;
