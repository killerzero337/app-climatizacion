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

// qi_sens_trans	(k_cerr1*(sup_cerr1-sup_vid_cerr1-sup_puer_cerr1)*(temp_int_inv-temp_cerr1_inv))+(k_cerr2*(sup_cerr2-sup_vid_cerr2-sup_puer_cerr2)*(temp_int_inv-temp_cerr2_inv))+(k_cerr3*(sup_cerr3-sup_vid_cerr3-sup_puer_cerr3)*(temp_int_inv-temp_cerr3_inv))+(k_cerr4*(sup_cerr4-sup_vid_cerr4-sup_puer_cerr4)*(temp_int_inv-temp_cerr4_inv))+(k_techo*(sup_techo-sup_vid_techo-sup_puer_techo)*(temp_int_inv-temp_techo_inv))+(k_suelo*(sup_suelo)*(temp_int_inv-temp_suelo_inv))
// qi_sens_renov	(caudal_aire/3600)*(1/volum_espe_int_inv)*(entalpia_ext_inv_sens-entalpia_int_inv_sens)*1.1
// qc_sens	qi_sens_trans+qi_sens_renov
// qc	qc_sens*(1+fs/100)

export function qv_sens_ocup(qs_pers, ocupacion) {
  return qs_pers * ocupacion;
}
