"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newEquipo(formData) {
  let redirectUrl;
  try {
    const nombre = formData.get("nombre");
    const proyectoId = Number(formData.get("proyecto_id"));
    const factor_funcionamiento = Number(formData.get("factor_funcionamiento"));
    const potencia = Number(formData.get("potencia_w"));

    const equipo = await prisma.equipo.create({
      data: {
        nombre,
        proyectoId,
        potencia,
        factor_funcionamiento,
      },
    });

    console.log(equipo);
    revalidatePath("/camara");
    redirectUrl = `/camara?id=${proyectoId}`;
  } catch (error) {
    console.log(error);
    // console.log(recinto)
    console.log("Error al crear el cerramiento");
  }
  redirect(redirectUrl);
}

export async function getProyectoEquipo(id) {
  try {
    const proyectos = await prisma.proyecto.findUnique({
      where: { id: Number(id) },
      include: {
        equipos: true,
      },
    });
    console.log(proyectos);
    return proyectos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getEquipo(id) {
  try {
    const equipo = await prisma.equipo.findUnique({
      where: { id: Number(id) },
      include: {
        proyecto: true 
      }
    });
    console.log(equipo);
    return equipo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteEquipo(formData) {
  let redirectUrl;

  try {
    const id = Number(formData.get("id"));
    const proyectoId = formData.get("proyecto_id");
    console.log("ID recibido:", proyectoId);
    const equipo = await prisma.equipo.delete({
      where: { id: id },
    });
    console.log("Camaras eliminado:", equipo);
    revalidatePath("/camara");
    redirectUrl = `/camara?id=${proyectoId}`;
  } catch (error) {
    console.log("Error al eliminar el cerramiento:", error);
  }
  redirect(redirectUrl);
}
