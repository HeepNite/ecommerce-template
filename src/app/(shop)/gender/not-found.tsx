// Comentarios específicos sobre el código:

// - Importamos el componente PageNotFound necesario para mostrar la página de error 404.
import { PageNotFound } from '@/components';

// - Definimos el componente funcional notFoundPage.
export default function notFoundPage() {

  // - Renderizamos el componente PageNotFound para mostrar la página de error 404.
  return (
    <PageNotFound />
  );
};

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `notFoundPage` cumple con SRP al encargarse únicamente de mostrar la página de error 404.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `notFoundPage` depende de una abstracción (el componente `PageNotFound`), cumpliendo con DIP.
