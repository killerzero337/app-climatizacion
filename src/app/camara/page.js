"use client";
import { useSearchParams } from "next/navigation";
import Tarjeta from "@/components/Tarjeta";
import Link from "next/link";
function EditPage() {
  const id = searchParam.get("id");
  return (
    <Tarjeta>
      <div>Proyecto {id}</div>
      <Link href={`/camara/new`}>Crear recinto</Link>
    </Tarjeta>
  );
}

export default EditPage;
