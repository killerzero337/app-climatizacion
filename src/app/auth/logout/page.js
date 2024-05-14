import { logout } from "@/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Tarjeta from "@/components/Tarjeta";

async function page() {
  const sesion = await auth();

  if (sesion) {
    const { user } = sesion;
    console.log(sesion);

    return (
      <>
        <Tarjeta>
          <h1 className="text-2xl mb-4 text-center">¿Desea cerrar sesion?</h1>
          <form className="container flex flex-col items-center gap-4 text-blue-500">
            <label className="text-center">
              Nombre
              <input
                type="text"
                name="name"
                value={user.name}
                readOnly
                className="w-full text-black bg-gray-100 text-center rounded-full"
              />
            </label>
            <label className="text-center">
              Email
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="w-full text-black bg-gray-100 text-center rounded-full"
              />
            </label>
            {user.image ? (
              <img
                src={user.image}
                alt={`Imagen de ${user.name}`}
                className="rounded-full w-20 h-20"
              />
            ) : (
              <img
                src="/user.svg"
                alt={`Imagen de ${user.name}`}
                className="rounded-full w-20 h-20 flex justify-center items-center bg-white/50 dark:bg-blue-800/80 bg-no bg-center  "
              />
            )}
            <button
              formAction={logout}
              className="bg-sky-600 bg-center bg-no-repeat rounded-[10px] w-32 h-10 cursor-pointer text-white"
            >
              Cerrar sesion
            </button>
          </form>
        </Tarjeta>
      </>
    );
  } else {
    redirect("/auth/login");
  }
}

export default page;
