"use client";
import React, { useEffect, useState } from "react";
import { createPDF } from "@/lib/actions-proyecto";
import Tarjeta from "@/components/Tarjeta";

async function GeneratorPage({ searchParams }) {
  const [loading, setLoading] = useState(false);

  const id = searchParams.id;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (id) {
        try {
          const pdfBytes = await createPDF(id);
          if (pdfBytes) {
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = `proyecto_${id}.pdf`;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }
        } catch (error) {
          console.error("Error al generar el PDF:", error);
        }
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <Tarjeta>Generando PDF...</Tarjeta>;
  }

  return (
    <Tarjeta>
      <p>¡Generación de PDF completada!</p>
    </Tarjeta>
  );
}

export default GeneratorPage;
