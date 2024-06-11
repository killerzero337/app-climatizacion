export function calcularPresion(altitud) {
  let total =
    101325 *
    Math.pow(
      1 - (0.0065 / (15 + 273.15)) * altitud,
      9.807 / 0.2883419 / 0.0065 / 1000
    );
  return total;
}

export function calcularP_sat_agua_ext_ver(temp_ext_ver) {
  let total = Math.exp(
    -5800.2206 * Math.pow(temp_ext_ver + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_ext_ver + 273.15) +
      0.000041764768 * Math.pow(temp_ext_ver + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_ext_ver + 273.15, 3) +
      6.5459673 * Math.log(temp_ext_ver + 273.15)
  );
  return total;
}

export function calcularHum_absol_ext_ver(
  hum_ext_ver,
  p_sat_agua_ext_ver,
  presion
) {
  let total =
    (1000 * 0.62198 * (hum_ext_ver / 100) * p_sat_agua_ext_ver) /
    (presion - (hum_ext_ver / 100) * p_sat_agua_ext_ver);
  return total;
}

export function calcularEntalpia_ext_ver_sens(temp_ext_ver, hum_absol_ext_ver) {
  let total =
    (1.006 * temp_ext_ver +
      (hum_absol_ext_ver / 1000) * (1.89 * temp_ext_ver)) *
    1000;

  return total;
}

export function calcularEntalpia_ext_ver_lat(hum_absol_ext_ver) {
  let total = (hum_absol_ext_ver / 1000) * 2501.3 * 1000;
  return total;
}

export function calcularVolum_espe_ext_ver(
  temp_ext_ver,
  hum_absol_ext_ver,
  presion
) {
  let total =
    (0.2870551882 *
      (temp_ext_ver + 273.15) *
      (1 + (1.6078 * hum_absol_ext_ver) / 1000)) /
    (presion / 1000);
  return total;
}

export function calcularPp_sat_agua_ext_inv(temp_ext_inv) {
  let total = Math.exp(
    -5800.2206 * Math.pow(temp_ext_inv + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_ext_inv + 273.15) +
      0.000041764768 * Math.pow(temp_ext_inv + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_ext_inv + 273.15, 3) +
      6.5459673 * Math.log(temp_ext_inv + 273.15)
  );
  return total;
}

export function calcularHum_absol_ext_inv(
  hum_ext_inv,
  p_sat_agua_ext_inv,
  presion
) {
  let total =
    (1000 * 0.62198 * (hum_ext_inv / 100) * p_sat_agua_ext_inv) /
    (presion - (hum_ext_inv / 100) * p_sat_agua_ext_inv);
  return total;
}

export function calcularEntalpia_ext_inv_sens(temp_ext_inv, hum_absol_ext_inv) {
  let total =
    (1.006 * temp_ext_inv +
      (hum_absol_ext_inv / 1000) * (1.89 * temp_ext_inv)) *
    1000;
  return total;
}

export function calcularEntalpia_ext_inv_lat(hum_absol_ext_inv) {
  let total = (hum_absol_ext_inv / 1000) * 2501.3 * 1000;
  return total;
}

export function calcularVolum_espe_ext_inv(
  temp_ext_inv,
  hum_absol_ext_inv,
  presion
) {
  let total =
    (0.2870551882 *
      (temp_ext_inv + 273.15) *
      (1 + (1.6078 * hum_absol_ext_inv) / 1000)) /
    (presion / 1000);
  return total;
}

export function calcularP_sat_agua_int_ver(temp_int_ver) {
  let total = Math.exp(
    -5800.2206 * Math.pow(temp_int_ver + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_int_ver + 273.15) +
      0.000041764768 * Math.pow(temp_int_ver + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_int_ver + 273.15, 3) +
      6.5459673 * Math.log(temp_int_ver + 273.15)
  );
  return total;
}

export function calcularHum_absol_int_ver(
  hum_int_ver,
  p_sat_agua_int_ver,
  presion
) {
  let total =
    (1000 * 0.62198 * (hum_int_ver / 100) * p_sat_agua_int_ver) /
    (presion - (hum_int_ver / 100) * p_sat_agua_int_ver);
  return total;
}

export function calcularEntalpia_int_ver_sens(temp_int_ver, hum_absol_int_ver) {
  total =
    (1.006 * temp_int_ver +
      (hum_absol_int_ver / 1000) * (1.89 * temp_int_ver)) *
    1000;
  return total;
}

export function calcularEntalpia_int_ver_lat(hum_absol_int_ver) {
  let total = (hum_absol_int_ver / 1000) * 2501.3 * 1000;
  return total;
}

export function calcularVolum_espe_int_ver(
  temp_int_ver,
  hum_absol_int_ver,
  presion
) {
  let total =
    (0.2870551882 *
      (temp_int_ver + 273.15) *
      (1 + (1.6078 * hum_absol_int_ver) / 1000)) /
    (presion / 1000);
  return total;
}

export function calcularP_sat_agua_int_inv(temp_int_inv) {
  let total = Math.exp(
    -5800.2206 * Math.pow(temp_int_inv + 273.15, -1) +
      1.3914993 -
      0.048640239 * (temp_int_inv + 273.15) +
      0.000041764768 * Math.pow(temp_int_inv + 273.15, 2) -
      0.000000014452093 * Math.pow(temp_int_inv + 273.15, 3) +
      6.5459673 * Math.log(temp_int_inv + 273.15)
  );
  return total;
}

export function calcularHum_absol_int_inv(
  hum_int_ver,
  p_sat_agua_int_ver,
  presion
) {
  let total =
    (1000 * 0.62198 * (hum_int_ver / 100) * p_sat_agua_int_ver) /
    (presion - (hum_int_ver / 100) * p_sat_agua_int_ver);
  return total;
}

export function calcularEntalpia_int_inv_sens(temp_int_inv, hum_absol_int_inv) {
  let total =
    (1.006 * temp_int_inv +
      (hum_absol_int_inv / 1000) * (1.89 * temp_int_inv)) *
    1000;
  return total;
}

export function calcularEntalpia_int_inv_lat(hum_absol_int_inv) {
  let total = (hum_absol_int_inv / 1000) * 2501.3 * 1000;
  return total;
}

export function calcularVolum_espe_int_inv(
  temp_int_inv,
  hum_absol_int_inv,
  presion
) {
  let total =
    (0.2870551882 *
      (temp_int_inv + 273.15) *
      (1 + (1.6078 * hum_absol_int_inv) / 1000)) /
    (presion / 1000);
  return total;
}

