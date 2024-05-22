function Articulo({ children, proyecto }) {
  return (
    <div style={{ border: "1px solid lightgrey", padding: "50px" }}>
      <p>
        <strong>{proyecto?.localidad}</strong>
      </p>
      <p>{proyecto?.temperatura_verano.toString()} C</p>
      <p>{proyecto?.humedad_verano.toString()} %</p>
      <p>{proyecto?.temperatura_invierno.toString()} C</p>
      <p>{proyecto?.humedad_invierno.toString()} %</p>
      <p>{proyecto?.altitud.toString()}metros</p>
      <p>{proyecto?.zona_climatica}</p>
      <div className="">
        <p className="font-bold">Ocupacion</p>
        <p>{proyecto?.numero_personas}</p>
        <p>{proyecto?.watios_personas}</p>
      </div>
      <div className="">
        <p className="font-bold">Caudales</p>
        <p>{proyecto?.caudales_ida}</p>
        <p>{proyecto?.caudales_aire}</p>
      </div>
      <div className="">
        <p className="font-bold">Iluminacion</p>
        <p>{proyecto?.tipo_iluminacion}</p>
        <p>{proyecto?.potencia_iluminacion}</p>
      </div>
      <div className="">
        <p className="font-bold">Factor Mayoracion</p>
        <p>{proyecto?.seguridad.toString()}%</p>
      </div>
      {children}
    </div>
  );
}

export default Articulo;
