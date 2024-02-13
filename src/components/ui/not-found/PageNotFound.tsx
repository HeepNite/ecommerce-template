// - Importamos los componentes y módulos necesarios para construir la página de error 404.
import Image from 'next/image';  // Importamos la funcionalidad de imágenes de Next.js.
import Link from 'next/link';  // Importamos Link de Next.js para gestionar enlaces.
import { titleFont } from '@/config/fonts';  // Importamos la configuración de fuentes.

// - Definimos el componente funcional PageNotFound.
export const PageNotFound = () => {

  // - Renderizamos la estructura de la página de error 404.
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      {/* Contenedor de texto e información */}
      <div className="text-center px-5 mx-5">
        {/* Título 404 con estilos de fuente configurados */}
        <h2 className={ `${ titleFont.className } antialiased text-9xl` }>404</h2>
        {/* Mensaje de error */}
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        {/* Mensaje adicional con enlace al inicio */}
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link
            href='/'
            className="font-normal hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>

      {/* Contenedor de la imagen */}
      <div className="px-5 mx-5">
        {/* Imagen de Starman con dimensiones y estilos */}
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 550 }
          height={ 550 }
        />
      </div>

    </div>
  );
};

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `PageNotFound` cumple con SRP al encargarse únicamente de mostrar la página de error 404.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `PageNotFound` depende de abstracciones (como `Image` y `Link` de Next.js), cumpliendo con DIP.
