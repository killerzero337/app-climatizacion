"use client";

import React, { useState, useEffect } from "react";
import Boton from "@/components/boton";
import Popover from "@/components/popover";

async function getDataLocalidades() {
  const res = await fetch("https://api-climatologia.onrender.com/localidades");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getDataCoef() {
  const res = await fetch("https://api-climatologia.onrender.com/coef");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function FormProyecto({ action, title, proyecto, disabled = false }) {
  const [data, setData] = useState([]);
  const [coef, setCoef] = useState({});
  const [selectedLocalidad, setSelectedLocalidad] = useState({});
  const [selectedCoef, setSelectedCoef] = useState({});
  const [selectedTabiques, setSelectedTabiques] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [localidadesData, coefData] = await Promise.all([
          getDataLocalidades(),
          getDataCoef(),
        ]);
        setData(localidadesData);
        setCoef(coefData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div role="status" className="flex flex-col gap-2 animate-pulse">
        <div className="relative animate-pulse">
          <div className="h-10 bg-gray-400 rounded-sm dark:bg-gray-700 w-full"></div>
        </div>
        <div className="mt-4 p-4 bg-gray-400 rounded shadow-md animate-pulse">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-400 rounded shadow-md animate-pulse">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
            <div className="h-16 bg-gray-400 rounded-sm dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="flex justify-center mt-6 animate-pulse">
          <div className="h-10 bg-gray-400 rounded-sm dark:bg-gray-700 w-32"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-2xl">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-center text-2xl">No hay datos disponibles</div>;
  }

  const handleLocalidadChange = (e) => {
    const selectedValue = e.target.value;
    const selectedLocalidadData = data.find(
      (item) => item.nombre === selectedValue
    );
    setSelectedLocalidad(selectedLocalidadData || {});

    if (selectedLocalidadData && selectedLocalidadData["zona climatica"]) {
      const zonaClimatica = selectedLocalidadData["zona climatica"];
      const coefZonaClimatica = coef.Elementos_exteriores.find(
        (item) => item[zonaClimatica]
      );
      const tabiquesZonaClimatica = coef.Tabiques_interiores.find(
        (item) => item[zonaClimatica]
      );

      setSelectedCoef(
        coefZonaClimatica ? coefZonaClimatica[zonaClimatica] : {}
      );
      setSelectedTabiques(
        tabiquesZonaClimatica ? tabiquesZonaClimatica[zonaClimatica] : {}
      );
    } else {
      setSelectedCoef({});
      setSelectedTabiques({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedLocalidad((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoefChange = (e) => {
    const { name, value } = e.target;
    setSelectedCoef((prev) => ({ ...prev, [name]: value }));
  };

  const handleTabiquesChange = (e) => {
    const { name, value } = e.target;
    setSelectedTabiques((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="relative">
        <label className="block">Localidad:</label>
        <input
          className="border-2 border-black rounded p-2 w-full"
          list="localidades"
          onChange={handleLocalidadChange}
        />
        <datalist id="localidades">
          {data.map((item, index) => (
            <option key={index} value={item.nombre} />
          ))}
        </datalist>
      </div>
      <div className="mt-4 p-4 border rounded shadow-md">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          <div className="mb-2">
            <label className="flex items-center">
              Temperatura (Verano):
              <Popover content="Temperatura máxima en verano">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="number"
              name="temp_ext_ver"
              defaultValue={selectedLocalidad.temp_ext_ver}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              Humedad (Verano):
              <Popover content="Humedad relativa en verano">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="number"
              name="hr_ext_ver"
              defaultValue={selectedLocalidad.hr_ext_ver}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              Temperatura (Invierno):
              <Popover content="Temperatura mínima en invierno">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="number"
              name="temp_ext_inv"
              defaultValue={selectedLocalidad.temp_ext_inv}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              Humedad (Invierno):
              <Popover content="Humedad relativa en invierno">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="number"
              name="hr_ext_inv"
              defaultValue={selectedLocalidad.hr_ext_inv}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              Altitud:
              <Popover content="Altitud sobre el nivel del mar">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="number"
              name="altitud"
              defaultValue={selectedLocalidad.altitud}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              Zona climatica:
              <Popover content="Zona climática de la localidad">
                <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
              </Popover>
            </label>
            <input
              type="text"
              name="zona climatica"
              defaultValue={selectedLocalidad["zona climatica"]}
              onChange={handleInputChange}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
        </div>

        <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-4">
          {Object.keys(selectedCoef).map((key) => (
            <div className="mb-2" key={key}>
              <label className="flex items-center">
                {key.replace("_", " / ")}:
                <Popover content={`Valor de coeficiente ${key.replace("_", " / ")}`}>
                  <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
                </Popover>
              </label>
              <input
                type="number"
                name={key}
                value={selectedCoef[key]}
                onChange={handleCoefChange}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 border rounded shadow-md grid grid-cols-1 gap-4 md:grid-cols-4">
          {Object.keys(selectedTabiques).map((key) => (
            <div className="mb-2" key={key}>
              <label className="flex items-center">
                {key.replace("_", " / ")}:
                <Popover content={`Valor de tabique ${key.replace("_", " / ")}`}>
                  <img src="/question.svg" className="ml-2 w-5 h-5" alt="info" />
                </Popover>
              </label>
              <input
                type="number"
                name={key}
                value={selectedTabiques[key]}
                onChange={handleTabiquesChange}
                className="border-2 border-gray-300 rounded p-2 w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Boton title="Crear proyecto" />
      </div>
    </>
  );
}



export default FormProyecto;
