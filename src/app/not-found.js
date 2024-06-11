import Link from "next/link";
import Tarjeta from "@/components/Tarjeta";
export default function NotFound() {
  return (
    <Tarjeta>
      <div className="text-center  container  items-center  ">
        <h1 className="text-5xl">Error 404</h1>
        <p className="text-xl">No se encontró la página</p>
        <Link
          href="/"
          className="transition animate-bounce duration-500 hover:text-blue-700 text-2xl"
        >
          Click aquí para volver
        </Link>
      </div>
    </Tarjeta>
  );
}
