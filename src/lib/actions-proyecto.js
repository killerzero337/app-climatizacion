"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProyectos() {
  try {
    const proyectos = await prisma.proyecto.findMany();
    return proyectos;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

export async function newProyecto(formData) {
  try {
    const localidad = formData.get("nombre");
    const temperatura_verano = formData.get("temperatura_verano");
    const humedad_verano = formData.get("humedad_verano");
    const temperatura_invierno = formData.get("temperatura_invierno");
    const humedad_invierno = formData.get("humedad_invierno");
    const altitud = formData.get("altitud");
    const zona_climatica = formData.get("zona_climatica");
    const numero_personas = formData.get("numero_personas");
    const watios_personas = formData.get("watios_personas");
    const caudales_ida = formData.get("caudales_ida");
    const caudales_aire = formData.get("caudales_aire");
    const tipo_iluminacion = formData.get("tipo_iluminacion");
    const potencia_iluminacion = formData.get("potencia_iluminacion");
    const seguridad = formData.get("seguridad");

    const proyecto = await prisma.articulo.create({
      data: {
        localidad,
        temperatura_verano,
        humedad_verano,
        temperatura_invierno,
        humedad_invierno,
        altitud,
        zona_climatica,
        numero_personas,
        watios_personas,
        caudales_ida,
        caudales_aire,
        tipo_iluminacion,
        potencia_iluminacion,
        seguridad
      },
    });

    console.log(proyecto);
    revalidatePath("/proyecto");
  } catch (error) {
    console.log(error);
  }
  redirect("/proyecto");
}

export async function editProyecto(formData) {
  const id = Number(formData.get("id"));
  const localidad = formData.get("localidad");
  const temperatura_verano = formData.get("temperatura_verano");
  const humedad_verano = formData.get("humedad_verano");
  const temperatura_invierno = formData.get("temperatura_invierno");
  const humedad_invierno = formData.get("humedad_invierno");
  const altitud = formData.get("altitud");
  const zona_climatica = formData.get("zona_climatica");
  const numero_personas = formData.get("numero_personas");
  const watios_personas = formData.get("watios_personas");
  const caudales_ida = formData.get("caudales_ida");
  const caudales_aire = formData.get("caudales_aire");
  const tipo_iluminacion = formData.get("tipo_iluminacion");
  const potencia_iluminacion = formData.get("potencia_iluminacion");
  const seguridad = formData.get("seguridad");

  try {
    const articulo = await prisma.articulo.update({
      where: { id },
      data: { 
        localidad,
        temperatura_verano,
        humedad_verano,
        temperatura_invierno,
        humedad_invierno,
        altitud,
        zona_climatica,
        numero_personas,
        watios_personas,
        caudales_ida,
        caudales_aire,
        tipo_iluminacion,
        potencia_iluminacion,
        seguridad
    },
    });
    console.log(articulo);
    revalidatePath("/articulos");
  } catch (error) {
    console.log(error);
  }
  redirect("/articulos");
}

export async function deleteArticulo(formData) {
  try {
    const id = Number(formData.get("id"));

    const articulo = await prisma.articulo.delete({
      where: {
        id: id,
      },
    });
    console.log(articulo);
    revalidatePath("/articulos");
  } catch (error) {
    console.log(error);
  }

  redirect("/articulos");
}
