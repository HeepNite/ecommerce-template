"use client"
// Importamos las funciones y componentes necesarios para construir nuestro componente de paginación.
import Link from 'next/link';  // Importamos Link de Next.js para gestionar enlaces.
import { redirect, usePathname, useSearchParams } from 'next/navigation';  // Importamos funciones de redirección y manejo de parámetros de búsqueda.
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';  // Importamos iconos para las flechas de navegación.
import { numbersPag } from '@/utils';  // Importamos una utilidad para generar números de página.
import clsx from 'clsx';  // Importamos clsx para manejar clases de estilos condicionalmente.

// Definimos las propiedades que recibirá nuestro componente.
interface Props {
    totalPages: number;  // Número total de páginas disponibles.
}

// Función principal del componente Pagination.
export const Pagination = ({ totalPages }: Props) => {

    // Obtiene la ruta actual.
    const pathName = usePathname();
    // Obtiene los parámetros de búsqueda de la URL actual.
    const searchParams = useSearchParams();
    // Obtiene el valor del parámetro 'page' de los parámetros de búsqueda. Si no existe, asigna 1 como valor predeterminado.
    const pageString = searchParams.get('page') ?? 1;
    // Convierte el valor de 'pageString' a un número. Si no es un número válido, asigna 1 como valor predeterminado.
    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    // Redirige a la página principal si el número de página es inválido.
    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathName);
    }

    // Genera un array con los números de página para mostrar en la paginación.
    const allPages = numbersPag({ currentPage, totalPages });

    // Función para crear una URL de página según el número de página proporcionado.
    const createPageUrl = (pageNumber: number | string) => {
        // Creamos un nuevo objeto URLSearchParams basado en los parámetros de búsqueda actuales.
        const params = new URLSearchParams(searchParams);

        // Si el número de página es '...', devolvemos la URL actual sin cambios.
        if (pageNumber === '...') {
            return `${pathName}?${params.toString()}`;
        }

        // Si el número de página es menor o igual a 0 o mayor que el total de páginas, volvemos a la página principal.
        if (+pageNumber <= 0 || +pageNumber > totalPages) {
            return `${pathName}`;
        }

        // Establecemos el parámetro 'page' en el número de página proporcionado.
        params.set('page', pageNumber.toString());

        // Devolvemos la URL actualizada con el nuevo parámetro de página.
        return `${pathName}?${params.toString()}`;
    };

    // Renderiza el componente de paginación.
    return (
        <section className="flex justify-center my-16">
            {/* Contenedor de navegación con etiqueta ARIA para accesibilidad */}
            <nav aria-label="Page navigation example">
                {/* Lista de elementos de navegación */}
                <ul className="flex list-style-none items-center">
                    {/* Botón para retroceder una página */}
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none"
                            // Genera la URL para retroceder una página utilizando la función 'createPageUrl'
                            href={createPageUrl(currentPage - 1)}
                        >
                            {/* Icono de flecha hacia atrás */}
                            <IoChevronBackOutline />
                        </Link>
                    </li>

                    {/* Números de página o puntos suspensivos */}
                    {allPages.map((page, i) => (
                        <li className="page-item" key={`${page}-${i}`}>
                            <Link
                                // Clases condicionales para el estilo del enlace de página actual o inactiva
                                className={clsx(
                                    "page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                                    {
                                        'bg-blue-600 shadow-sm text-white hover:text-white hover:bg-blue-700': page === currentPage
                                    }
                                )}
                                // Genera la URL para la página actual utilizando la función 'createPageUrl'
                                href={createPageUrl(page)}
                            >
                                {/* Número de página o puntos suspensivos */}
                                {page}
                            </Link>
                        </li>
                    ))}

                    {/* Botón para avanzar una página */}
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            // Genera la URL para avanzar una página utilizando la función 'createPageUrl'
                            href={createPageUrl(currentPage + 1)}
                        >
                            {/* Icono de flecha hacia adelante */}
                            <IoChevronForwardOutline />
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `createPageUrl` se encarga únicamente de generar URLs para páginas, cumpliendo con SRP.
// - **Principio de abierto-cerrado (OCP):** La función `createPageUrl` está abierta a la extensión ya que puede manejar diferentes casos de números de página o puntos suspensivos, cumpliendo parcialmente con OCP.
// - **Principio de sustitución de Liskov (LSP):** No hay clases ni herencia en esta función, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en esta función, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `createPageUrl` depende de abstracciones como `searchParams`, `pathName`, y `totalPages`, cumpliendo con DIP.
