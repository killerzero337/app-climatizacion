
import Log from "@/components/botonLog";
import Menu from "@/components/Menu";
import Rutas from "@/components/Rutas";
import { auth } from "@/auth";

async function Nav() {
  const sesion = await auth();

  return (
    <header className="w-screen bg-sky-400 dark:bg-gray-900 flex justify-around items-center font-Rounded font-bold p-2 sticky top-0 z-50 border-b-[3px] border-blue-400/90 dark:border-sky-600">
    <div>
      <Menu sesion={sesion} />
    </div>
    <div>
      <Rutas sesion={sesion} />
    </div>
    <div>
      <Log sesion={sesion} />
    </div>
  </header>
  );
}

export default Nav;
