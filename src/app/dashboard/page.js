import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
  const sesion = await auth();
  if (sesion?.user.role !== "ADMIN") redirect("/dashboard");
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[80vh] text-[5vh]">
        <div className="text-center  text-stone-500 container  items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80">
          <h1>🔐 Admin panel</h1>
          <p>{sesion?.user.name}</p>
          <p> {sesion?.user.email} </p>
          <p> {sesion?.user.role} </p>
          <div className="flex w-full justify-center">
            {sesion?.user.image ? (
              <img src={sesion.user.image} alt={sesion.user.name} />
            ) : (
              <img src="/user.svg" alt="Imagen por defecto" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
