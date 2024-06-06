"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getProyectos } from "@/lib/actions-proyecto";

export async function newRecinto(formData) {
  try {
    const nombre = formData.get("nombre");
    const proyectoId = formData.get("proyectoId");
    const t_ver_relativa = formData.get("t_ver_relativa");
    const t_inv_relativa = formData.get("t_inv_relativa");
    const hr_ver_relativa = formData.get("hr_ver_relativa");
    const hr_inv_relativa = formData.get("hr_inv_relativa");
    const longitud = formData.get("longitud");
    const achura = formData.get("achura");
    const altura = formData.get("altura");
    const volumen = formData.get("volumen");
    const ida = formData.get("ida");

    // Cerramiento 1

    const orientacion = formData.get("orientacion");
    const ubicacion_c_1 = formData.get("ubicacion_c_1");
    const temperatura_ver_c_1 = Number(formData.get("temperatura_ver_c_1"));
    const temperatura_inv_c_1 = Number(formData.get("temperatura_inv_c_1"));
    const superficie_c_1 = Number(formData.get("superficie_c_1"));
    const superficie_vidrio_c_1 = Number(formData.get("superficie_vidrio_c_1"));
    const tipo_vidrio_c_1 = formData.get("tipo_vidrio_c_1");
    const superficie_puertas_c_1 = Number(
      formData.get("superficie_puertas_c_1")
    );

    // Cerramiento 2

    const ubicacion_c_2 = formData.get("ubicacion_c_2");
    const temperatura_ver_c_2 = formData.get("temperatura_ver_c_2");
    const temperatura_inv_c_2 = formData.get("temperatura_inv_c_2");
    const superficie_c_2 = formData.get("superficie_c_2");
    const superficie_vidrio_c_2 = formData.get("superficie_vidrio_c_2");
    const tipo_vidrio_c_2 = formData.get("tipo_vidrio_c_2");
    const superficie_puertas_c_2 = formData.get("superficie_puertas_c_2");

    // Cerramiento 3

    const ubicacion_c_3 = formData.get("ubicacion_c_3");
    const temperatura_ver_c_3 = formData.get("temperatura_ver_c_3");
    const temperatura_inv_c_3 = formData.get("temperatura_inv_c_3");
    const superficie_c_3 = formData.get("superficie_c_3");
    const superficie_vidrio_c_3 = formData.get("superficie_vidrio_c_3");
    const tipo_vidrio_c_3 = formData.get("tipo_vidrio_c_3");
    const superficie_puertas_c_3 = formData.get("superficie_puertas_c_3");

    // Cerramiento 4

    const ubicacion_c_4 = formData.get("ubicacion_c_4");
    const temperatura_ver_c_4 = formData.get("temperatura_ver_c_4");
    const temperatura_inv_c_4 = formData.get("temperatura_inv_c_4");
    const superficie_c_4 = formData.get("superficie_c_4");
    const superficie_vidrio_c_4 = formData.get("superficie_vidrio_c_4");
    const tipo_vidrio_c_4 = formData.get("tipo_vidrio_c_4");
    const superficie_puertas_c_4 = formData.get("superficie_puertas_c_4");

    const camara = await prisma.camara.create({
      data: {
        nombre,
        proyectoId,
        t_ver_relativa,
        t_inv_relativa,
        hr_ver_relativa,
        hr_inv_relativa,
        longitud,
        achura,
        altura,
        volumen,
        ida,

        // Cerramiento 1

        orientacion,
        ubicacion_c_1,
        temperatura_ver_c_1,
        temperatura_inv_c_1,
        superficie_c_1,
        superficie_vidrio_c_1,
        tipo_vidrio_c_1,
        superficie_puertas_c_1,

        // Cerramiento 2

        ubicacion_c_2,
        temperatura_ver_c_2,
        temperatura_inv_c_2,
        superficie_c_2,
        superficie_vidrio_c_2,
        tipo_vidrio_c_2,
        superficie_puertas_c_2,

        // Cerramiento 3

        ubicacion_c_3,
        temperatura_ver_c_3,
        temperatura_inv_c_3,
        superficie_c_3,
        superficie_vidrio_c_3,
        tipo_vidrio_c_3,
        superficie_puertas_c_3,

        // Cerramiento 4

        ubicacion_c_4,
        temperatura_ver_c_4,
        temperatura_inv_c_4,
        superficie_c_4,
        superficie_vidrio_c_4,
        tipo_vidrio_c_4,
        superficie_puertas_c_4,
      },
    });
    console.log(camara);
    revalidatePath(`/camara`);
    return camara;
  } catch (error) {
    console.log(camara);
    console.log(error);
    return null;
  }
}
export async function getRecintos(proyectoId) {
  try {
    const proyectos = await getProyectos();
    const camaras = await prisma.camara.findMany({
      where: { proyectoId: proyectoId },
    });

    return { proyectos, camaras };
  } catch (error) {
    console.log(error);
    return null;
  }
}
