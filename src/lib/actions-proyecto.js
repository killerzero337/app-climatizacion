"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/lib/cloudinary";

async function imgCreate(file) {
  console.log(file);

  const fileBuffer = await file.arrayBuffer();

  let mime = file.type;
  let encoding = "base64";
  let base64Data = Buffer.from(fileBuffer).toString("base64");
  let fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

  try {
    // width: 600, aspect-ratio: 1
    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      folder: "galeria",
      public_id: file.name.split(".").slice(0, -1).join("."),
      aspect_ratio: "1.0",
      width: 600,
      crop: "fill",
      gravity: "center",
    });
    console.log(result);
    return result.secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getIdUsuario(email) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user.id;
}

export async function getProyectos() {
  try {
    const proyectos = await prisma.proyecto.findMany();
    return proyectos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProyectosPorId(userId) {
  try {
    const proyectos = await prisma.proyecto.findMany({
      where: { userId: userId },
    });
    return proyectos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function newProyecto(formData) {
  try {
    const nombre = formData.get("nombre");
    const userId = formData.get("usuario_Id");
    const localidad = formData.get("localidad");
    const fecha = formData.get("fecha")
      ? formData.get("fecha" + "T00:00:00.000Z")
      : new Date().toISOString();
    const temp_ext_ver = Number(formData.get("temp_ext_ver"));
    const temp_ext_inv = Number(formData.get("temp_ext_inv"));
    const hr_ext_inv = Number(formData.get("hr_ext_inv"));
    const hr_ext_ver = Number(formData.get("hr_ext_ver"));
    const altitud = Number(formData.get("altitud"));
    const zona_climatica = formData.get("zona_climatica");
    const numero_personas = Number(formData.get("numero_personas"));
    const w_persona = Number(formData.get("w_persona"));
    const us_um = Number(formData.get("us_um"));
    const uc = Number(formData.get("uc"));
    const ut_umd = Number(formData.get("ut_umd"));
    const uh = Number(formData.get("uh"));
    const up = Number(formData.get("up"));
    const uph = Number(formData.get("uph"));
    const upv = Number(formData.get("upv"));
    const uphv = Number(formData.get("uphv"));
    const tph = Number(formData.get("tph"));
    const tpv = Number(formData.get("tpv"));
    const tphv = Number(formData.get("tphv"));
    const caudales_ida = Number(formData.get("caudales_ida"));
    const caudales_aire = Number(formData.get("caudales_aire"));
    const tipo_lampara = formData.get("tipo_lampara");
    const potencia_lampara = Number(formData.get("potencia_lampara"));
    const valor_seguridad = Number(formData.get("valor_seguridad"));
    const carga_latente = Number(formData.get("carga_latente"));
    const comentarios = formData.get("comentarios");
    const imagen = formData.get("file");
    const rutaImagen = await imgCreate(imagen);

    const proyecto = await prisma.proyecto.create({
      data: {
        nombre,
        localidad,
        userId,
        temp_ext_ver,
        temp_ext_inv,
        hr_ext_inv,
        hr_ext_ver,
        altitud,
        fecha,
        zona_climatica,
        numero_personas,
        w_persona,
        carga_latente,
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
        caudales_ida,
        caudales_aire,
        tipo_lampara,
        potencia_lampara,
        valor_seguridad,
        comentarios,
        imagen: rutaImagen,
      },
    });

    console.log(proyecto);
    revalidatePath("/proyecto");
  } catch (error) {
    console.log(error);
  }
  redirect("/proyecto");
}
