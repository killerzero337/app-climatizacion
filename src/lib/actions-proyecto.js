"use server";
import { prisma } from "@/lib/prisma";
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
    const localidad = formData.get("localidad");
    console.log(localidad);
    const temperatura_verano = parseFloat(formData.get("temp_ext_ver"));
    console.log(temperatura_verano);
    const humedad_verano = parseFloat(formData.get("hr_ext_ver"));
    console.log(humedad_verano);
    const temperatura_invierno = parseFloat(formData.get("temp_ext_inv"));
    console.log(temperatura_invierno);
    const humedad_invierno = parseFloat(formData.get("hr_ext_inv"));
    console.log(humedad_invierno);
    const altitud = parseFloat(formData.get("altitud"));
    console.log(altitud);
    const zona_climatica = formData.get("zona_climatica");
    console.log(zona_climatica);
    const numero_personas = parseInt(formData.get("numero_personas"));
    console.log(numero_personas);
    const watios_personas = parseFloat(formData.get("w_persona"));
    console.log(watios_personas);
    const caudales_ida = parseFloat(formData.get("caudales_ida"));
    console.log(caudales_ida);
    const caudales_aire = parseFloat(formData.get("caudales_aire"));
    console.log(caudales_aire);
    const tipo_iluminacion = formData.get("tipo_lampara");
    console.log(tipo_iluminacion);
    const potencia_iluminacion = parseFloat(formData.get("potencia_lampara"));
    console.log(potencia_iluminacion);
    const seguridad = parseFloat(formData.get("valor_seguridad"));
    console.log(seguridad);
    const us_um = parseFloat(formData.get("us_um"));
    const uc = parseFloat(formData.get("uc"));
    const ut_umd = parseFloat(formData.get("ut_umd"));
    const uh = parseFloat(formData.get("uh"));
    const up = parseFloat(formData.get("up"));
    const uph = parseFloat(formData.get("uph"));
    const upv = parseFloat(formData.get("upv"));
    const uphv = parseFloat(formData.get("uphv"));
    const tph = parseFloat(formData.get("tph"));
    const tpv = parseFloat(formData.get("tpv"));
    const tphv = parseFloat(formData.get("tphv"));
    const comentarios = formData.get("comentarios");
    const proyecto = await prisma.articulo.create({
      data: {
        localidad,
        temperatura_verano,
        temperatura_invierno,
        humedad_verano,
        humedad_invierno,
        altitud,
        zona_climatica,
        numero_personas,
        watios_personas,
        caudales_ida,
        caudales_aire,
        comentarios,
        tipo_iluminacion,
        potencia_iluminacion,
        seguridad,
        us_um,
        uc,
        ut_umd,
        uh,
        up,
        uph,
        upv,
        uphv,
        tph,
        tpv,
        tphv,
      },
    });

    console.log("Proyecto creado:", proyecto);
    revalidatePath("/proyecto");
  } catch (error) {
    console.error("Error creando nuevo proyecto:", error);
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
    const proyecto = await prisma.articulo.update({
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
        seguridad,
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
