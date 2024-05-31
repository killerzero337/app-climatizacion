function Proyecto({ children, proyecto }) {
  return (
    <div style={{ border: "1px solid lightgrey", padding: "50px" }}>
      <p>
        <strong>{proyecto?.nombre}</strong>
        <p>{proyecto?.fecha}</p>
        <p>{proyecto?.cliente}</p>
        <p>{proyecto?.anotacion}</p>
      </p>
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
        <p>{proyecto?.numero_personas.toString()}</p>
        <p>{proyecto?.w_personas.toString()}</p>
      </div>
      <div className="">
        <p className="font-bold">Caudales</p>
        <p>{proyecto?.caudales_ida.toString()}</p>
        <p>{proyecto?.caudales_aire.toString()}</p>
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
      <div className="">
        <p className="font-bold">Tabiques interiores/exteriores</p>
        <p>{proyecto?.usum.toString()}%</p>
        <p>{proyecto?.uc.toString()}%</p>
        <p>{proyecto?.utumd.toString()}%</p>
        <p>{proyecto?.uh.toString()}%</p>
        <p>{proyecto?.up.toString()}%</p>
        <p>{proyecto?.uph.toString()}%</p>
        <p>{proyecto?.upv.toString()}%</p>
        <p>{proyecto?.uphv.toString()}%</p>
      </div>
      {children}
    </div>
  );
}

export default Proyecto;
