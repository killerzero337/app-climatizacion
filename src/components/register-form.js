"use client";
import { useState } from "react";
import { register } from "@/lib/actions";
import { redirect } from "next/navigation";
import Button from "@/components/button-form";

function RegisterForm() {
  const [resultado, setResultado] = useState("");
  const [tipo, setTipo] = useState("");

  async function wrapper(data) {
    const message = await register(data);
    if (message.success) {
      setTipo("success");
      // setResultado(message.success);
      redirect("/");
    } else {
      setTipo("error");
      setResultado(message.error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-[3vh]">
       <h1 className="text-4xl font-bold mb-4">Registro</h1>
      <div className="text-center  text-stone-500 container  items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80">
      <form action={wrapper} className="credentials">
        <div className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="mb-1">Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Michael Garrido"
              className="p-2 border border-gray-300 rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Garrido@mail.com"
              className="p-2 border border-gray-300 rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1">Contraseña</span>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="p-2 border border-gray-300 rounded"
            />
          </label>

          <p className={`info ${tipo} text-center`}>{resultado}</p>
        </div>

        <Button title="Crear cuenta" />
      </form>
      </div>
    </div>
  );
}

export default RegisterForm;
