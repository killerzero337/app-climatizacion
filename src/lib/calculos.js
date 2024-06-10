////////////////////////
// Resultados finales://
////////////////////////

// veranso
// qv_sens_rad	(rad_cerr1*sup_vid_cerr1*f_cerr1)+(rad_cerr2*sup_vid_cerr2*f_cerr2)+(rad_cerr3*sup_vid_cerr3*f_cerr3)+(rad_cerr4*sup_vid_cerr4*f_cerr4)+(rad_techo*sup_vid_techo*f_techo)
// qv_sens_trans	(k_cerr1*(sup_cerr1-sup_vid_cerr1-sup_puer_cerr1)*(temp_int_ver-temp_cerr1_ver))+(k_cerr2*(sup_cerr2-sup_vid_cerr2-sup_puer_cerr2)*(temp_int_ver-temp_cerr2_ver))+(k_cerr3*(sup_cerr3-sup_vid_cerr3-sup_puer_cerr3)*(temp_int_ver-temp_cerr3_ver))+(k_cerr4*(sup_cerr4-sup_vid_cerr4-sup_puer_cerr4)*(temp_int_ver-temp_cerr4_ver))+(k_techo*(sup_techo-sup_vid_techo-sup_puer_techo)*(temp_int_ver-temp_techo_ver))+(k_suelo*(sup_suelo)*(temp_int_ver-temp_suelo_ver))
// qv_sens_renov	(caudal_aire/3600)*(1/volum_espe_int_ver)*(entalpia_ext_ver_sens-entalpia_int_ver_sens)*1.1
// qv_sens_ocup	qs_pers*ocupacion
// qv_sens_ilum	iluminacion*sup_suelo
// qv_sens_equip	pot_eq1*ff_eq1+pot_eq2*ff_eq2+pot_eq3*ff_eq3+...
// qr_sens	qv_sens_rad+qv_sens_trans+qv_sens_renov+qv_sens_ocup+qv_sens_ilum+qv_sens_equip
// qv_lat_renov	(caudal_aire/3600)*(1/volum_espe_int_ver)*(entalpia_ext_ver_lat-entalpia_int_ver_lat)*1.1
// qv_lat_ocup	qs_pers*ocupacion
// qr_lat	qv_lat_renov+qv_lat_ocup
// qr	(qr_sens+qr_lat)*(1+fs/100)

// invierno
// qi_sens_trans	(k_cerr1*(sup_cerr1-sup_vid_cerr1-sup_puer_cerr1)*(temp_int_inv-temp_cerr1_inv))+(k_cerr2*(sup_cerr2-sup_vid_cerr2-sup_puer_cerr2)*(temp_int_inv-temp_cerr2_inv))+(k_cerr3*(sup_cerr3-sup_vid_cerr3-sup_puer_cerr3)*(temp_int_inv-temp_cerr3_inv))+(k_cerr4*(sup_cerr4-sup_vid_cerr4-sup_puer_cerr4)*(temp_int_inv-temp_cerr4_inv))+(k_techo*(sup_techo-sup_vid_techo-sup_puer_techo)*(temp_int_inv-temp_techo_inv))+(k_suelo*(sup_suelo)*(temp_int_inv-temp_suelo_inv))
// qi_sens_renov	(caudal_aire/3600)*(1/volum_espe_int_inv)*(entalpia_ext_inv_sens-entalpia_int_inv_sens)*1.1
// qc_sens	qi_sens_trans+qi_sens_renov
// qc	qc_sens*(1+fs/100)

///////////////
// presion	101325*pow((1-0.0065/(15+273.15)*altitud),(9.807/0.2883419/0.0065/1000))
// p_sat_agua_ext_ver	exp(-5800.2206*pow((temp_ext_ver+273.15),-1)+1.3914993-0.048640239*(temp_ext_ver+273.15)+0.000041764768*pow((temp_ext_ver+273.15),2)-0.000000014452093*pow((temp_ext_ver+273.15),3)+6.5459673*log(temp_ext_ver+273.15)))
// hum_absol_ext_ver	1000*0.62198*(hum_ext_ver/100)*p_sat_agua_ext_ver/(presion-(hum_ext_ver/100)*p_sat_agua_ext_ver)
// entalpia_ext_ver_sens	(1.006*temp_ext_ver+(hum_absol_ext_ver/1000)*(1.89*temp_ext_ver))*1000
// entalpia_ext_ver_lat	(hum_absol_ext_ver/1000)*(2501.3)*1000
// volum_espe_ext_ver	0.2870551882*(temp_ext_ver+273.15)*(1+1.6078*hum_absol_ext_ver/1000)/(presion/1000)
// p_sat_agua_ext_inv	exp(-5800.2206*pow((temp_ext_inv+273.15),-1)+1.3914993-0.048640239*(temp_ext_inv+273.15)+0.000041764768*pow((temp_ext_inv+273.15),2)-0.000000014452093*pow((temp_ext_inv+273.15),3)+6.5459673*log(temp_ext_inv+273.15)))
// hum_absol_ext_inv	1000*0.62198*(hum_ext_inv/100)*p_sat_agua_ext_inv/(presion-(hum_ext_inv/100)*p_sat_agua_ext_inv)
// entalpia_ext_inv_sens	(1.006*temp_ext_inv+(hum_absol_ext_inv/1000)*(1.89*temp_ext_inv))*1000
// entalpia_ext_inv_lat	(hum_absol_ext_inv/1000)*(2501.3)*1000
// volum_espe_ext_inv	0.2870551882*(temp_ext_inv+273.15)*(1+1.6078*hum_absol_ext_inv/1000)/(presion/1000)
//////////

// /////////////
// p_sat_agua_int_ver	exp(-5800.2206*pow((temp_int_ver+273.15),-1)+1.3914993-0.048640239*(temp_int_ver+273.15)+0.000041764768*pow((temp_int_ver+273.15),2)-0.000000014452093*pow((temp_int_ver+273.15),3)+6.5459673*log(temp_int_ver+273.15)))
// hum_absol_int_ver	1000*0.62198*(hum_int_ver/100)*p_sat_agua_int_ver/(presion-(hum_int_ver/100)*p_sat_agua_int_ver)
// entalpia_int_ver_sens	(1.006*temp_int_ver+(hum_absol_int_ver/1000)*(1.89*temp_int_ver))*1000
// entalpia_int_ver_lat	(hum_absol_int_ver/1000)*(2501.3)*1000
// volum_espe_int_ver	0.2870551882*(temp_int_ver+273.15)*(1+1.6078*hum_absol_int_ver/1000)/(presion/1000)
// p_sat_agua_int_inv	exp(-5800.2206*pow((temp_int_inv+273.15),-1)+1.3914993-0.048640239*(temp_int_inv+273.15)+0.000041764768*pow((temp_int_inv+273.15),2)-0.000000014452093*pow((temp_int_inv+273.15),3)+6.5459673*log(temp_int_inv+273.15)))
// hum_absol_int_inv	1000*0.62198*(hum_int_inv/100)*p_sat_agua_int_inv/(presion-(hum_int_inv/100)*p_sat_agua_int_inv)
// entalpia_int_inv_sens	(1.006*temp_int_inv+(hum_absol_int_inv/1000)*(1.89*temp_int_inv))*1000
// entalpia_int_inv_lat	(hum_absol_int_inv/1000)*(2501.3)*1000
// volum_espe_int_inv	0.2870551882*(temp_int_inv+273.15)*(1+1.6078*hum_absol_int_inv/1000)/(presion/1000)
///////////////

export function qv_sens_rad(
  rad_cerr1,
  sup_vid_cerr1,
  tipo_vidrio_cerr1,
  rad_cerr2,
  sup_vid_cerr2,
  tipo_vidrio_cerr2,
  rad_cerr3,
  sup_vid_cerr3,
  tipo_vidrio_cerr3,
  rad_cerr4,
  sup_vid_cerr4,
  tipo_vidrio_cerr4,
  rad_techo,
  sup_vid_techo,
  tipo_vidrio_techo
) {
  // Objeto de mapeo para las cadenas de dirección a valores numéricos
  const valoresDireccion = {
    norte: 38,
    noreste: 32,
    este: 32,
    sureste: 32,
    sur: 49,
    suroste: 423,
    oeste: 556,
    noroeste: 350,
    horizonte: 372,
  };

  // Objeto de mapeo para los tipos de vidrio a sus valores numéricos
  const valoresVidrio = {
    normal: 1,
    doble: [0.8, 0.9],
    triple: [0.7, 0.8],
    baja_emisividad: [0.1, 0.5],
  };

  // Función para obtener el valor numérico correspondiente a la cadena de dirección
  function obtenerValorDireccion(cadena) {
    return valoresDireccion[cadena] || 0; // Devuelve 0 si la cadena no está en el objeto de mapeo
  }

  // Función para obtener el valor numérico correspondiente al tipo de vidrio
  function obtenerValorVidrio(cadena) {
    const valor = valoresVidrio[cadena];
    if (Array.isArray(valor)) {
      // Si es un array, devuelve el primer valor
      return valor[0];
    } else {
      // Si es un valor normal, lo devuelve directamente
      return valor;
    }
  }

  // Obtener valores numéricos para las cadenas de dirección y tipo de vidrio proporcionadas
  const rad_cerr1_valor = obtenerValorDireccion(rad_cerr1);
  const rad_cerr2_valor = obtenerValorDireccion(rad_cerr2);
  const rad_cerr3_valor = obtenerValorDireccion(rad_cerr3);
  const rad_cerr4_valor = obtenerValorDireccion(rad_cerr4);
  const rad_techo_valor = obtenerValorDireccion(rad_techo);

  const f_cerr1 = obtenerValorVidrio(tipo_vidrio_cerr1);
  const f_cerr2 = obtenerValorVidrio(tipo_vidrio_cerr2);
  const f_cerr3 = obtenerValorVidrio(tipo_vidrio_cerr3);
  const f_cerr4 = obtenerValorVidrio(tipo_vidrio_cerr4);
  const f_techo = obtenerValorVidrio(tipo_vidrio_techo);

  // Calcula el resto de la función utilizando los valores numéricos
  return (
    rad_cerr1_valor * sup_vid_cerr1 * f_cerr1 +
    rad_cerr2_valor * sup_vid_cerr2 * f_cerr2 +
    rad_cerr3_valor * sup_vid_cerr3 * f_cerr3 +
    rad_cerr4_valor * sup_vid_cerr4 * f_cerr4 +
    rad_techo_valor * sup_vid_techo * f_techo
  );
}

export async function qv_sens_renov(
  caudal_aire,
  volum_espe_int_ver,
  entalpia_ext_ver_sens,
  entalpia_int_ver_sens
) {
  console.log(
    entalpia_ext_ver_sens,
    entalpia_int_ver_sens,
    volum_espe_int_ver,
    caudal_aire
  );
  return (
    (caudal_aire / 3600) *
    (1 / volum_espe_int_ver) *
    (entalpia_ext_ver_sens - entalpia_int_ver_sens) *
    1.1
  );
}

export function qv_sens_ocup(qs_pers, ocupacion) {
  // Un ejemeplo perfecto de cuando empezar a usar TypeScript

  const valor_ocupacion = ocupacion === "sedentario" ? 70 : 150;

  const qv_sens_ocup = qs_pers * valor_ocupacion;

  return qv_sens_ocup;
}

export function qv_sens_ilum(iluminacion, sup_suelo, tipo_luz) {
  if (typeof tipo_luz !== "string") {
    return 0;
  }

  const valor_iluminacion =
    tipo_luz.toLowerCase() === "led"
      ? 4
      : tipo_luz.toLowerCase() === "fluorescente"
      ? 20
      : 0;

  const qv_sens_ilum = (iluminacion * sup_suelo * valor_iluminacion).toFixed(2);

  return qv_sens_ilum;
}

export function calcularMediaSuperficieSuelo(recintos) {
  if (recintos.length === 0) {
    return 0;
  }

  let sumaSuperficieSuelo = 0;

  for (const recinto of recintos) {
    sumaSuperficieSuelo += recinto.superficie_suelo;
  }

  const mediaSuperficieSuelo = sumaSuperficieSuelo / recintos.length;

  return mediaSuperficieSuelo;
}

// Calculos para proyecto:

export function qv_sens_trans(
  proyecto,
  k_cerr1,
  sup_cerr1,
  sup_vid_cerr1,
  sup_puer_cerr1,
  temp_int_ver,
  temp_cerr1_ver,
  k_vid_cerr1,
  k_puer_cerr1,
  k_cerr2,
  sup_cerr2,
  sup_vid_cerr2,
  sup_puer_cerr2,
  temp_cerr2_ver,
  k_vid_cerr2,
  k_puer_cerr2,
  k_cerr3,
  sup_cerr3,
  sup_vid_cerr3,
  sup_puer_cerr3,
  temp_cerr3_ver,
  k_vid_cerr3,
  k_puer_cerr3,
  k_cerr4,
  sup_cerr4,
  sup_vid_cerr4,
  sup_puer_cerr4,
  temp_cerr4_ver,
  k_vid_cerr4,
  k_puer_cerr4,
  k_techo,
  sup_techo,
  sup_vid_techo,
  sup_puer_techo,
  temp_techo_ver,
  k_vid_techo,
  k_puer_techo,
  k_suelo,
  sup_suelo,
  temp_suelo_ver
) {
  let valorC1 = 0;
  let valorC2 = 0;
  let valorC3 = 0;
  let valorC4 = 0;
  let valorT = 0;
  let valorS = 0;

  // Determinar el valor de C1
  if (k_cerr1 === "interior") {
    valorC1 = proyecto?.us_um;
  } else {
    valorC1 = proyecto?.tphv;
  }
  console.log("valorC1:", valorC1);

  // Determinar el valor de C2
  if (k_cerr2 === "interior") {
    valorC2 = proyecto?.us_um;
  } else {
    valorC2 = proyecto?.tphv;
  }
  console.log("valorC2:", valorC2);

  // Determinar el valor de C3
  if (k_cerr3 === "interior") {
    valorC3 = proyecto?.us_um;
  } else {
    valorC3 = proyecto?.tphv;
  }
  console.log("valorC3:", valorC3);

  // Determinar el valor de C4
  if (k_cerr4 === "interior") {
    valorC4 = proyecto?.us_um;
  } else {
    valorC4 = proyecto?.tphv;
  }
  console.log("valorC4:", valorC4);

  // Determinar el valor de T
  if (k_techo === "interior") {
    valorT = proyecto?.us_um;
  } else {
    valorT = proyecto?.tphv;
  }
  console.log("valorT:", valorT);

  // Determinar el valor de S
  if (k_suelo === "interior") {
    valorS = proyecto?.us_um;
  } else {
    valorS = proyecto?.tphv;
  }
  console.log("valorS:", valorS);

  // Calcular cada término por separado
  let term1 =
    valorC1 *
    (sup_cerr1 - sup_vid_cerr1 - sup_puer_cerr1) *
    (temp_int_ver - temp_cerr1_ver);
  if (isNaN(term1)) {
    console.log("term1 es NaN");
    term1 = 0;
  }
  console.log("term1:", term1);

  let term2 = k_vid_cerr1 * sup_vid_cerr1 * (temp_int_ver - temp_cerr1_ver);
  if (isNaN(term2)) {
    console.log("term2 es NaN");
    term2 = 0;
  }
  console.log("term2:", term2);

  let term3 = k_puer_cerr1 * sup_puer_cerr1 * (temp_int_ver - temp_cerr1_ver);
  if (isNaN(term3)) {
    console.log("term3 es NaN");
    term3 = 0;
  }
  console.log("term3:", term3);

  let term4 =
    valorC2 *
    (sup_cerr2 - sup_vid_cerr2 - sup_puer_cerr2) *
    (temp_int_ver - temp_cerr2_ver);
  if (isNaN(term4)) {
    console.log("term4 es NaN");
    term4 = 0;
  }
  console.log("term4:", term4);

  let term5 = k_vid_cerr2 * sup_vid_cerr2 * (temp_int_ver - temp_cerr2_ver);
  if (isNaN(term5)) {
    console.log("term5 es NaN");
    term5 = 0;
  }
  console.log("term5:", term5);

  let term6 = k_puer_cerr2 * sup_puer_cerr2 * (temp_int_ver - temp_cerr2_ver);
  if (isNaN(term6)) {
    console.log("term6 es NaN");
    term6 = 0;
  }
  console.log("term6:", term6);

  let term7 =
    valorC3 *
    (sup_cerr3 - sup_vid_cerr3 - sup_puer_cerr3) *
    (temp_int_ver - temp_cerr3_ver);
  if (isNaN(term7)) {
    console.log("term7 es NaN");
    term7 = 0;
  }
  console.log("term7:", term7);

  let term8 = k_vid_cerr3 * sup_vid_cerr3 * (temp_int_ver - temp_cerr3_ver);
  if (isNaN(term8)) {
    console.log("term8 es NaN");
    return 0;
  }
  console.log("term8:", term8);

  let term9 = k_puer_cerr3 * sup_puer_cerr3 * (temp_int_ver - temp_cerr3_ver);
  if (isNaN(term9)) {
    console.log("term9 es NaN");
    return 0;
  }
  console.log("term9:", term9);

  let term10 =
    valorC4 *
    (sup_cerr4 - sup_vid_cerr4 - sup_puer_cerr4) *
    (temp_int_ver - temp_cerr4_ver);
  if (isNaN(term10)) {
    console.log("term10 es NaN");
    term10 = 0;
  }
  console.log("term10:", term10);

  let term11 = k_vid_cerr4 * sup_vid_cerr4 * (temp_int_ver - temp_cerr4_ver);
  if (isNaN(term11)) {
    console.log("term11 es NaN");
    term11 = 0;
  }
  console.log("term11:", term11);

  let term12 = k_puer_cerr4 * sup_puer_cerr4 * (temp_int_ver - temp_cerr4_ver);
  if (isNaN(term12)) {
    console.log("term12 es NaN");
    term12 = 0;
  }
  console.log("term12:", term12);

  let term13 =
    valorT *
    (sup_techo - sup_vid_techo - sup_puer_techo) *
    (temp_int_ver - temp_techo_ver);
  if (isNaN(term13)) {
    console.log("term13 es NaN");
    term13 = 0;
  }
  console.log("term13:", term13);

  let term14 = k_vid_techo * sup_vid_techo * (temp_int_ver - temp_techo_ver);
  if (isNaN(term14)) {
    console.log("term14 es NaN");
    term14 = 0;
  }
  console.log("term14:", term14);

  let term15 = k_puer_techo * sup_puer_techo * (temp_int_ver - temp_techo_ver);
  if (isNaN(term15)) {
    console.log("term15 es NaN");
    term15 = 0;
  }
  console.log("term15:", term15);

  let term16 = valorS * sup_suelo * (temp_int_ver - temp_suelo_ver);
  if (isNaN(term16)) {
    console.log("term16 es NaN");
    term16 = 0;
  }
  console.log("term16:", term16);

  // Sumar todos los términos
  let cargaSensibleTransmision =
    term1 +
    term2 +
    term3 +
    term4 +
    term5 +
    term6 +
    term7 +
    term8 +
    term9 +
    term10 +
    term11 +
    term12 +
    term13 +
    term14 +
    term15 +
    term16;

  console.log("Carga sensible de transmisión:", cargaSensibleTransmision);

  return cargaSensibleTransmision;
}

export function calcularPresion(altitud) {
  return (
    101325 *
    Math.pow(
      1 - (0.0065 / (15 + 273.15)) * altitud,
      9.807 / 0.2883419 / 0.0065 / 1000
    )
  );
}

export function calcularPsatAguaExt(temp_ext_ver) {
  return Math.exp(
    -5800.2206 * Math.pow(temp_ext_ver + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_ext_ver + 273.15) +
      0.000041764768 * Math.pow(temp_ext_ver + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_ext_ver + 273.15, 3) +
      6.5459673 * Math.log(temp_ext_ver + 273.15)
  );
}

export function calcularHumAbsolExt(hum_ext_ver, presion, p_sat_agua_ext_ver) {
  return (
    (1000 * 0.62198 * (hum_ext_ver / 100) * p_sat_agua_ext_ver) /
    (presion - (hum_ext_ver / 100) * p_sat_agua_ext_ver)
  );
}

export function calcularEntalpiaExtSens(temp_ext_ver, hum_absol_ext_ver) {
  return (
    (1.006 * temp_ext_ver +
      (hum_absol_ext_ver / 1000) * (1.89 * temp_ext_ver)) *
    1000
  );
}

export function calcularEntalpiaExtLat(hum_absol_ext_ver) {
  return (hum_absol_ext_ver / 1000) * 2501.3 * 1000;
}

export function calcularVolumEspeExt(temp_ext_ver, hum_absol_ext_ver, presion) {
  return (
    (0.2870551882 *
      (temp_ext_ver + 273.15) *
      (1 + (1.6078 * hum_absol_ext_ver) / 1000)) /
    (presion / 1000)
  );
}

export function calcularPsatAguaExtInv(temp_ext_inv) {
  return Math.exp(
    -5800.2206 * Math.pow(temp_ext_inv + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_ext_inv + 273.15) +
      0.000041764768 * Math.pow(temp_ext_inv + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_ext_inv + 273.15, 3) +
      6.5459673 * Math.log(temp_ext_inv + 273.15)
  );
}

export function calcularHumAbsolExtInv(
  hum_ext_inv,
  presion,
  p_sat_agua_ext_inv
) {
  return (
    (1000 * 0.62198 * (hum_ext_inv / 100) * p_sat_agua_ext_inv) /
    (presion - (hum_ext_inv / 100) * p_sat_agua_ext_inv)
  );
}

export function calcularEntalpiaExtInvSens(temp_ext_inv, hum_absol_ext_inv) {
  return (
    (1.006 * temp_ext_inv +
      (hum_absol_ext_inv / 1000) * (1.89 * temp_ext_inv)) *
    1000
  );
}

export function calcularEntalpiaExtInvLat(hum_absol_ext_inv) {
  return (hum_absol_ext_inv / 1000) * 2501.3 * 1000;
}

export function calcularVolumEspeExtInv(
  temp_ext_inv,
  hum_absol_ext_inv,
  presion
) {
  return (
    (0.2870551882 *
      (temp_ext_inv + 273.15) *
      (1 + (1.6078 * hum_absol_ext_inv) / 1000)) /
    (presion / 1000)
  );
}

export function calcularPsatAguaInt(temp_int_ver) {
  return Math.exp(
    -5800.2206 * Math.pow(temp_int_ver + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_int_ver + 273.15) +
      0.000041764768 * Math.pow(temp_int_ver + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_int_ver + 273.15, 3) +
      6.5459673 * Math.log(temp_int_ver + 273.15)
  );
}

export function calcularHumAbsolInt(hum_int_ver, presion, p_sat_agua_int_ver) {
  return (
    (1000 * 0.62198 * (hum_int_ver / 100) * p_sat_agua_int_ver) /
    (presion - (hum_int_ver / 100) * p_sat_agua_int_ver)
  );
}

export function calcularEntalpiaIntSens(temp_int_ver, hum_absol_int_ver) {
  return (
    (1.006 * temp_int_ver +
      (hum_absol_int_ver / 1000) * (1.89 * temp_int_ver)) *
    1000
  );
}

export function calcularEntalpiaIntLat(hum_absol_int_ver) {
  return (hum_absol_int_ver / 1000) * 2501.3 * 1000;
}

export function calcularVolumEspeInt(temp_int_ver, hum_absol_int_ver, presion) {
  return (
    (0.2870551882 *
      (temp_int_ver + 273.15) *
      (1 + (1.6078 * hum_absol_int_ver) / 1000)) /
    (presion / 1000)
  );
}

export function calcularPsatAguaIntInv(temp_int_inv) {
  return Math.exp(
    -5800.2206 * Math.pow(temp_int_inv + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_int_inv + 273.15) +
      0.000041764768 * Math.pow(temp_int_inv + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_int_inv + 273.15, 3) +
      6.5459673 * Math.log(temp_int_inv + 273.15)
  );
}

export function calcularHumAbsolIntInv(
  hum_int_inv,
  presion,
  p_sat_agua_int_inv
) {
  return (
    (1000 * 0.62198 * (hum_int_inv / 100) * p_sat_agua_int_inv) /
    (presion - (hum_int_inv / 100) * p_sat_agua_int_inv)
  );
}

export function calcularEntalpiaIntInvSens(temp_int_inv, hum_absol_int_inv) {
  return (
    (1.006 * temp_int_inv +
      (hum_absol_int_inv / 1000) * (1.89 * temp_int_inv)) *
    1000
  );
}

export function calcularEntalpiaIntInvLat(hum_absol_int_inv) {
  return (hum_absol_int_inv / 1000) * 2501.3 * 1000;
}

export function calcularVolumEspeIntInv(
  temp_int_inv,
  hum_absol_int_inv,
  presion
) {
  return (
    (0.2870551882 *
      (temp_int_inv + 273.15) *
      (1 + (1.6078 * hum_absol_int_inv) / 1000)) /
    (presion / 1000)
  );
}

// Función para calcular la presión de vapor de agua en el interior (sensible)
export function calcularPsatAguaIntVer(temp_int_ver) {
  return Math.exp(
    -5800.2206 * Math.pow(temp_int_ver + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_int_ver + 273.15) +
      0.000041764768 * Math.pow(temp_int_ver + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_int_ver + 273.15, 3) +
      6.5459673 * Math.log(temp_int_ver + 273.15)
  );
}

// Función para calcular la humedad absoluta interna (sensible)
export function calcularHumAbsolIntVer(
  hum_int_ver,
  temp_int_ver,
  presion,
  p_sat_agua_int_ver
) {
  return (
    (1000 * 0.62198 * (hum_int_ver / 100) * p_sat_agua_int_ver) /
    (presion - (hum_int_ver / 100) * p_sat_agua_int_ver)
  );
}

// Función para calcular la entalpía sensible interna
export function calcularEntalpiaIntVerSens(temp_int_ver, hum_absol_int_ver) {
  return (
    (1.006 * temp_int_ver +
      (hum_absol_int_ver / 1000) * (1.89 * temp_int_ver)) *
    1000
  );
}

// Función para calcular la entalpía latente interna
export function calcularEntalpiaIntVerLat(hum_absol_int_ver) {
  return (hum_absol_int_ver / 1000) * 2501.3 * 1000;
}
