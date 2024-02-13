// - Usamos "use client" para indicar a Vercel que este archivo no se debe incluir en el bundle del cliente.
"use client";

// - Importamos el componente 'PageNotFound' necesario para mostrar la página de error.
import { PageNotFound } from '@/components';

// - Definimos la función del componente GenderErrorPage.
export default function GenderErrorPage() {

  // - Renderizamos la página de error mostrando el componente 'PageNotFound'.
  return (
    <PageNotFound />
  );
}

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `GenderErrorPage` cumple con SRP al encargarse únicamente de mostrar la página de error para géneros no encontrados.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `GenderErrorPage` depende de abstracciones (como `PageNotFound` y los componentes) en lugar de implementaciones concretas, cumpliendo con DIP.





