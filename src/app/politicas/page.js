import React from "react";
import Tarjeta from "@/components/Tarjeta";
function page() {
  return (
    <Tarjeta>
      <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">Políticas de Privacidad</h1>
        <p class="mb-4">Última actualización: 13 de junio de 2024</p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            1. Información que recolectamos
          </h2>
          <p class="mb-2">
            Recolectamos varios tipos de información en conexión con los
            servicios que proveemos, incluyendo:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>
              Información personal identificable (como nombre, dirección de
              correo electrónico, número de teléfono, etc.) que nos proporcionas
              directamente.
            </li>
            <li>
              Datos de uso (como las páginas que visitas, el tiempo que pasas en
              nuestro sitio, etc.) recolectados automáticamente.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            2. Cómo usamos la información
          </h2>
          <p class="mb-2">Usamos la información que recolectamos para:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Proveer y mantener nuestros servicios.</li>
            <li>Notificarte sobre cambios en nuestros servicios.</li>
            <li>
              Permitir la participación en funciones interactivas de nuestros
              servicios cuando eliges hacerlo.
            </li>
            <li>Proveer atención y soporte al cliente.</li>
            <li>
              Proveer análisis o información valiosa para que podamos mejorar
              nuestros servicios.
            </li>
            <li>Monitorear el uso de nuestros servicios.</li>
            <li>Detectar, prevenir y abordar problemas técnicos.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            3. Compartición de información
          </h2>
          <p class="mb-2">
            Podemos compartir tu información personal en las siguientes
            situaciones:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>
              Con proveedores de servicios para monitorear y analizar el uso de
              nuestros servicios.
            </li>
            <li>Para cumplir con una obligación legal.</li>
            <li>
              Para proteger y defender los derechos o propiedad de nuestra
              empresa.
            </li>
            <li>
              Para prevenir o investigar posibles irregularidades en conexión
              con nuestros servicios.
            </li>
            <li>
              Para proteger la seguridad personal de los usuarios de los
              servicios o del público.
            </li>
            <li>Para protegerse contra responsabilidad legal.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            4. Seguridad de la información
          </h2>
          <p class="mb-2">
            La seguridad de tu información es importante para nosotros, pero
            recuerda que ningún método de transmisión por Internet o método de
            almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por
            usar medios comercialmente aceptables para proteger tu información
            personal, no podemos garantizar su absoluta seguridad.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">5. Enlaces a otros sitios</h2>
          <p class="mb-2">
            Nuestro servicio puede contener enlaces a otros sitios que no son
            operados por nosotros. Si haces clic en un enlace de un tercero,
            serás dirigido al sitio de ese tercero. Te recomendamos
            encarecidamente que revises la política de privacidad de cada sitio
            que visites.
          </p>
          <p class="mb-2">
            No tenemos control sobre y no asumimos ninguna responsabilidad por
            el contenido, las políticas de privacidad o las prácticas de sitios
            o servicios de terceros.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            6. Cambios a esta política de privacidad
          </h2>
          <p class="mb-2">
            Podemos actualizar nuestra política de privacidad de vez en cuando.
            Te notificaremos cualquier cambio publicando la nueva política de
            privacidad en esta página.
          </p>
          <p class="mb-2">
            Te recomendamos que revises esta política de privacidad
            periódicamente para cualquier cambio. Los cambios a esta política de
            privacidad son efectivos cuando se publican en esta página.
          </p>
        </section>
      </div>
    </Tarjeta>
  );
}

export default page;
