"use client";
import { useState } from "react";
import { login } from "@/lib/actions";
import Button from "@/components/button-form";
import Link from "next/link";
function LoginForm() {
  const [resultado, setResultado] = useState("");
  const [tipo, setTipo] = useState("");

  async function wrapper(data) {
    const message = await login(data);
    if (message?.success) {
      setTipo("success");
      setResultado(message.success);
    }
    if (message?.error) {
      setTipo("error");
      setResultado(message.error);
    }
  }
  return (
    <form
      action={wrapper}
      className="credentials flex flex-col items-center text-stone-500"
    >
      <div className="flex flex-col items-center mb-4 ">
        <label className="mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="nombre@gmail.com"
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <label className="mb-2">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          className="border p-2 rounded"
        />
      </div>
      <div className="flex justify-around gap-5 mb-5">
        <Button title="Iniciar sesion" />
        <Link
          href="/auth/register"
          className="bg-sky-600 transition duration-500 hover:bg-sky-600/50 flex items-center justify-center text-[1.5vh] text-white bg-no-repeat h-16 rounded-xl  w-28 cursor-pointer"
        >
          Crear cuenta
        </Link>
      </div>
      <div>
        <p className={`info ${tipo} text-red-700 mb-4`}> {resultado} </p>
      </div>
    </form>
  );
}

export default LoginForm;
