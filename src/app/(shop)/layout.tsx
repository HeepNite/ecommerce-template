// Importamos componentes reutilizables para el encabezado, la barra lateral y el pie de página.
import { Footer, Sidebar, TopMenu } from '@/components';

// Definimos la función del componente de diseño de la tienda.
export default function ShopLayout({ children }: {
  children: React.ReactNode;  // Propiedad que recibe los elementos hijos a renderizar.
}) {
  return (
    <main className="min-h-screen w-full">

      {/* Mostramos el encabezado de la tienda en la parte superior. */}
      <TopMenu />

      {/* Mostramos la barra lateral para la navegación adicional. */}
      <Sidebar />

      {/* Contenedor principal con relleno para el contenido de la tienda. */}
      <div className="px-0 sm:px-10">
        {children} {/* Renderizamos los elementos hijos dentro del contenedor principal. */}
      </div>

      {/* Mostramos el pie de página de la tienda al final. */}
      <Footer />
    </main>
  );
}
/* principios SOLID */

//  - **Principio de responsabilidad única (SRP):** El componente `ShopLayout` cumple con SRP al encargarse únicamente de mostrar el diseño de la página de la tienda. Es como un robot que solo hace sándwiches, no hamburguesas ni pizzas.
//  - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código. Sería como si el robot pudiera cambiar la receta del sándwich sin desarmarlo.
//  - **Principio de sustitución de Liskov (LSP):** No hay robots aprendices en este código, por lo que no aplica LSP.
//  - **Principio de segregación de interfaces (ISP):** No hay instrucciones detalladas para los robots en este código, por lo que no aplica ISP.
//  - **Principio de inversión de dependencias (DIP):** El componente `ShopLayout` depende de herramientas generales (como `TopMenu`, `Sidebar`, `Footer`) en lugar de herramientas específicas, cumpliendo con DIP. Es como si el robot usara utensilios que sirven para cualquier receta.