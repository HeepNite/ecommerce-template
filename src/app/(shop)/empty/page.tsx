// Comentarios específicos sobre el código:

// - Importamos Link de Next.js para gestionar enlaces.
import Link from 'next/link';
// - Importamos el icono IoCartOutline de react-icons para representar un carrito vacío.
import { IoCartOutline } from 'react-icons/io5';

// - Definimos el componente funcional EmptyPage.
export default function EmptyPage() {
  return (
    // Contenedor principal que centraliza los elementos en la pantalla.
    <div className="flex justify-center items-center h-[800px]">

      {/* Icono de carrito vacío */}
      <IoCartOutline size={ 80 } className="mx-5" />

      {/* Contenedor de texto y enlace */}
      <div className="flex flex-col items-center">
        {/* Título indicando que el carrito está vacío */}
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>

        {/* Enlace para regresar a la página principal */}
        <Link 
          href='/'
          className="text-blue-500 mt-2 text-4xl"
        >
          Regresar
        </Link>

      </div>

    </div>
  );
}

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `EmptyPage` cumple con SRP al encargarse únicamente de mostrar la página cuando el carrito está vacío.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `EmptyPage` no muestra dependencias directas en su código, cumpliendo con DIP.
