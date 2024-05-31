"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newCamara(formData, id_proyecto) {
  try {
    const nombre = formData.get("nombre");
    const info = formData.get("info");

    const camara = await prisma.camara.create({
      data: {
        nombre: formData.get("nombre"),
        info: formData.get("info"),
        id_proyecto: id_proyecto,
      },
    });
    revalidatePath(`/proyecto/${id_proyecto}`);
    return camara;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getCamaras(id_proyecto) {
  try {
    const camaras = await prisma.camara.findMany({
      where: { id_proyecto: id_proyecto },
    });
    return camaras;
  } catch (error) {
    console.log(error);
    return null;
  }
}
