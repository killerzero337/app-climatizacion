# App Climatización

Este es un proyecto de **Next.js** que permite a los usuarios obtener información sobre el clima y la climatización.

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Características](#características)
3. [Instalación](#instalación)
4. [Tecnologias Usadas](#tecnologias-usadas)


## Descripción

App Climatización es una aplicación web que proporciona información sobre el clima y la climatización utilizando tecnologías modernas como **Next.js** y **Tailwind CSS**.

## Características

- Información climática en tiempo real.
- Diseño responsivo.
- Integración con API de terceros para datos climatológicos.

## Instalación

Para comenzar con el desarrollo, primero clona el repositorio y luego instala las dependencias.

```bash
git clone https://github.com/killerzero337/app-climatizacion.git
cd app-climatizacion
npm install

# Una descripcion algo mas detallada de los diferentes directorios:
app-climatizacion/
├── prisma/                  # Configuración de Prisma
│   └── schema.prisma        # Esquema de la base de datos
├── public/                  # Archivos públicos
│   ├── favicon.ico          # Ícono de la aplicación
│   └── ...                  # Otros archivos públicos
├── src/                     # Código fuente principal
│   ├── pages/               # Páginas de Next.js
│   ├── components/          # Componentes de React
│   ├── styles/              # Archivos de estilos (CSS/Tailwind)
│   ├── lib/                 # Utilidades y funciones auxiliares
│   ├── prisma/              # Interacción con Prisma
│   └── ...                  # Otros archivos y carpetas
├── .gitignore               # Archivos y carpetas ignorados por Git
├── README.md                # Documentación del proyecto
├── jsconfig.json            # Configuración de JavaScript
├── next.config.mjs          # Configuración de Next.js
├── package-lock.json        # Archivo de bloqueo de dependencias
├── package.json             # Dependencias y scripts del proyecto
├── postcss.config.mjs       # Configuración de PostCSS
├── tailwind.config.js       # Configuración de Tailwind CSS

```


## Tecnologias usadas

* Prisma ORM
* Next auth
* Tailwind
* Next con React
