import React from "react";
import Tarjeta from "@/components/tarjeta";
import Skeeleton from "@/components/skeletons/proyectoSkeeleton";
function loading() {
  return (
    <Tarjeta>
      <Skeeleton />
    </Tarjeta>
  );
}

export default loading;
