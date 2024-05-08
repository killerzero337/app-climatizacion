function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-[8vh] sm:text-[4vh] sm:h-[80vh]">
      <div className="text-stone-500 container  items-center border-4 border-sky-700 p-8 rounded-md bg-gray-200/80">
        <h1>Sobre mí:</h1>
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
    </div>
  );
}

export default About;
