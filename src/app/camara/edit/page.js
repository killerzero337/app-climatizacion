import React from "react";
import { editRecinto } from "@/lib/actions-camara";
import Tarjeta from "@/components/Tarjeta";
import Formcamara from "@/components/Form-camara";
import { prisma } from "@/lib/prisma";
import * as calculos from "@/lib/calculos"; //SUPER UTIL quizas deba comentarlo

export const dynamic = "force-dynamic";
async function page({ searchParams }) {
  const recinto = await prisma.recinto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
    include: {
      proyecto: {
        include: {
          equipos: true,
        },
      },
    },
  });
  const temp_int_ver = 25;
  const temp_int_inv = 21;
  const hum_int_ver = 50;
  const hum_int_inv = 50;

  const { proyecto } = recinto;
  const { equipos } = proyecto;

  console.log("EQUIPOS", equipos);
  const presion = calculos.presion(proyecto?.altitud);

  const presionAguaVer = calculos.p_sat_agua_ext_ver(proyecto?.temp_ext_ver);
  const humedadExtVer = calculos.hum_absol_ext_ver(
    presion,
    proyecto?.hr_ext_ver,
    proyecto?.temp_ext_ver
  );
  const entalpiaExtVeranoSens = calculos.entalpia_ext_ver_sens(
    humedadExtVer,
    proyecto?.temp_ext_ver
  );
  const entalpatiaExtVeranoLat = calculos.entalpia_ext_ver_lat(humedadExtVer);
  const volumenExtVer = calculos.volum_espe_ext_ver(
    presion,
    proyecto?.temp_ext_ver,
    humedadExtVer
  );
  const presionAguaExtVer = calculos.p_sat_agua_ext_inv(proyecto?.temp_ext_inv);
  const humedadExtInv = calculos.hum_absol_ext_inv(
    presion,
    proyecto?.hr_ext_inv,
    presionAguaExtVer
  );
  const entalpatiaExtInviernoSens = calculos.entalpia_ext_inv_sens(
    proyecto?.temp_ext_inv,
    humedadExtInv
  );
  const entalpatiaExtInviernoLat = calculos.entalpia_ext_inv_lat(humedadExtInv);
  const volumenExtInv = calculos.volum_espe_ext_inv(
    presion,
    proyecto?.temp_ext_inv,
    humedadExtInv
  );
  const satAguaIntVer = calculos.p_sat_agua_int_ver(temp_int_ver);
  const hum_absol_int_ver = calculos.hum_absol_int_ver(
    hum_int_ver,
    satAguaIntVer,
    presion
  );

  const entalpiaIntVerSens = calculos.entalpia_int_ver_sens(
    temp_int_ver,
    hum_absol_int_ver
  );

  const entalpiaIntVerLat = calculos.entalpia_int_ver_lat(hum_absol_int_ver);

  console.log(entalpiaIntVerLat);

  const volumEspeIntVer = calculos.volum_espe_int_ver(
    temp_int_ver,
    hum_absol_int_ver,
    presion
  );

  const satAguaIntInv = calculos.p_sat_agua_int_inv(temp_int_inv);
  const humAbsolIntInv = calculos.hum_absol_int_inv(
    temp_int_inv,
    satAguaIntInv,
    presion
  );
  const EntalpiaIntInvSens = calculos.entalpia_int_inv_sens(
    temp_int_inv,
    humAbsolIntInv
  );

  const entalpiaIntInvSens = calculos.entalpia_int_inv_sens(
    temp_int_inv,
    humAbsolIntInv
  );

  const entalpiaIntInvLat = calculos.entalpia_int_inv_lat(humAbsolIntInv);

  const volumnEspeIntInv = calculos.volum_espe_int_inv(
    temp_int_inv,
    humAbsolIntInv,
    presion
  );

  const valorRadiacion = calculos.qv_sens_rad(
    recinto?.orientacion,
    recinto?.superficie_vidrio_c_1,
    recinto?.tipo_vidrio_c_1,
    recinto?.orientacion_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.tipo_vidrio_c_2,
    recinto?.orientacion_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.tipo_vidrio_c_3,
    recinto?.orientacion_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.tipo_vidrio_c_4,
    recinto?.orientacion_techo,
    recinto?.superficie_techo,
    recinto?.tipo_vidrio_techo
  );

  const valorTransmisibilidad = calculos.qv_sens_trans(
    proyecto,
    recinto?.ubicacion_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_c_1,
    recinto?.superficie_puertas_c_1,
    temp_int_ver,
    recinto?.temperatura_ver_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_puertas_c_1,
    recinto?.ubicacion_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.temperatura_ver_c_2,
    recinto?.temperatura_inv_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.ubicacion_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.temperatura_ver_c_3,
    recinto?.temperatura_inv_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.ubicacion_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.temperatura_ver_c_4,
    recinto?.temperatura_inv_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.superficie_techo,
    recinto?.tipo_vidrio_techo,
    recinto?.temperatura_ver_techo,
    recinto?.temperatura_inv_techo,
    recinto?.ubicacion_suelo,
    recinto?.superficie_suelo,
    recinto?.temperatura_ver_suelo
  );

  const valorOcupacionPersonas = calculos.qv_sens_ocup(
    proyecto?.w_persona,
    proyecto?.ocupacion_personas
  );

  const valorrenovacionAire = calculos.qv_sens_renov(
    proyecto?.caudales_aire,
    volumEspeIntVer,
    entalpiaExtVeranoSens,
    entalpiaIntVerSens
  );

  const valorIluminacion = calculos.qv_sens_ilum(
    proyecto?.potencia_lampara,
    recinto?.superficie_suelo,
    proyecto?.tipo_lampara
  );

  const lat_renov = calculos.qv_lat_renov(
    valorrenovacionAire,
    volumEspeIntVer,
    entalpiaExtVeranoSens,
    entalpiaIntVerSens
  );
  const ocupacionLat = calculos.qv_lat_ocup(
    valorOcupacionPersonas,
    proyecto?.ocupacion_personas
  );

  const qr_lat = calculos.qr_lat(lat_renov, ocupacionLat);

  const potenciaEquipos = calculos.qv_sens_equip(equipos);

  const valorTotal = calculos.qr_sens(
    valorRadiacion,
    valorTransmisibilidad,
    valorOcupacionPersonas,
    valorrenovacionAire,
    valorIluminacion,
    potenciaEquipos
  );
  const qi_sens_renov = calculos.qi_sens_renov(
    proyecto?.caudales_aire,
    volumnEspeIntInv,
    EntalpiaIntInvSens,
    entalpiaIntInvSens
  );

  const qi_sens_trans = calculos.qi_sens_trans(
    recinto?.ubicacion_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_c_1,
    recinto?.superficie_puertas_c_1,
    temp_int_inv,
    recinto?.temperatura_ver_c_1,
    recinto?.superficie_vidrio_c_1,
    recinto?.superficie_puertas_c_1,
    recinto?.ubicacion_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.temperatura_inv_c_2,
    recinto?.temperatura_ver_c_2,
    recinto?.superficie_vidrio_c_2,
    recinto?.superficie_puertas_c_2,
    recinto?.ubicacion_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.temperatura_ver_c_3,
    recinto?.temperatura_inv_c_3,
    recinto?.superficie_vidrio_c_3,
    recinto?.superficie_puertas_c_3,
    recinto?.ubicacion_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.temperatura_ver_c_4,
    recinto?.temperatura_inv_c_4,
    recinto?.superficie_vidrio_c_4,
    recinto?.superficie_puertas_c_4,
    recinto?.superficie_techo,
    recinto?.tipo_vidrio_techo,
    recinto?.temperatura_ver_techo,
    recinto?.temperatura_inv_techo,
    recinto?.ubicacion_suelo,
    recinto?.superficie_suelo,
    recinto?.temperatura_ver_suelo
  );
  const qc_sens = calculos.qc_sens(qi_sens_trans, qi_sens_renov);
  const qr = calculos.qr(valorTotal, qr_lat, proyecto?.valor_seguridad);
  const qc = calculos.qc(qc_sens, proyecto?.valor_seguridad);
  return (
    <Tarjeta>
      <div className="container items-center border-4 border-sky-400 dark:border-sky-700 p-8 rounded-md bg-gray-200/90 dark:bg-gray-900/90">
        <Formcamara
          title={"Editar recinto"}
          id={Number(searchParams.id)}
          camara={recinto}
          action={editRecinto}
          proyectoId={recinto?.proyectoId}
        />
      </div>
      <div className="mt-4 p-4 border rounded shadow-md w-full">
        <p className="mb-2 dark:text-orange-300 text-orange-800">Verano</p>
        <div className="flex flex-col ">
          <p>Carga sensible radiación vidrios (W): {valorRadiacion} </p>
          <p>
            Cargas térmicas a través de los cerramientos (W):{" "}
            {valorTransmisibilidad}{" "}
          </p>
          <p>
            Carga sensible de las personas (W):{" "}
            {valorOcupacionPersonas.toFixed(2)}
          </p>
          <p>Carga sensible iluminación (W): {valorIluminacion}</p>
          <p>Carga sensible renovación de aire (W): {valorrenovacionAire}</p>
          <p>Carga total sensible refrigeración (W): {valorTotal}</p>
          <p>Carga latente renovación de aire (W): {lat_renov}</p>
          <p>Carga latente de las personas (W): {ocupacionLat}</p>
          <p>Carga latente refrigeración (W): {qr_lat}</p>
          <p>Potencia refrigeración (W): {qr.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-4 p-4 border rounded shadow-md w-full">
        <p className="mb-2 dark:text-orange-300 text-orange-800">Invierno</p>
        <div className="flex flex-col ">
          <p>Carga sensible trasmisión cerramientos (W): {qi_sens_trans} </p>
          <p>
            Carga sensible infiltraciones y renovaciones de aire (W):{" "}
            {qi_sens_renov}{" "}
          </p>
          <p>Carga total sensible calefacción (W): {qc_sens} </p>
          <p>Potencia calefacción (W): {qc} </p>
        </div>
      </div>
    </Tarjeta>
  );
}

export default page;
