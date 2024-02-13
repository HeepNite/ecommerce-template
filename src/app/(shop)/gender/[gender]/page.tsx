// - Definimos el tiempo de revalidación en 60 segundos para indicar a Next.js cuándo debe volver a generar la página.
export const revalidate = 60; // 60 segundos

// - Importamos componentes y funciones necesarios para construir la página.
import { Pagination, ProductGrid, Title } from '@/components';  // Importamos componentes reutilizables para paginación, cuadrícula de productos y título.
import { getPagProduct } from '@/actions';  // Importamos la función que carga productos paginados.
import { Gender } from '@prisma/client';  // Importamos el tipo 'Gender' desde Prisma para verificar el género.
import { redirect } from 'next/navigation';  // Importamos la función de redirección de Next.js.

// - Definimos las propiedades que recibirá nuestro componente.
interface Props {
  params: {
    gender: string;  // Parámetro que representa el género de los productos.
  },
  searchParams: {
    page?: string;  // Parámetro opcional de la página actual.
  }
}

// - Función principal del componente genderPage.
export default async function genderPage({ params, searchParams }: Props) {

  // - Obtenemos el valor del parámetro 'gender' de los parámetros.
  const { gender } = params;

  // - Convertimos el número de página a un entero, o usamos 1 si no hay parámetro de página.
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // - Obtenemos la información necesaria para mostrar productos, la página actual y el total de páginas.
  const { products, currentPage, totalPages } = await getPagProduct({
    page,
    gender: gender as Gender,  // Convertimos 'gender' a tipo 'Gender' para verificar su validez.
  });

  // - Verificamos si no hay productos, y en ese caso redirigimos al usuario a la página principal del género.
  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  // - Definimos etiquetas según el género para mostrar en el título.
  const labels: Record<string, string> = {
    'Male': 'para hombres',
    'Female': 'para mujeres',
    'Kids': 'para niños',
    'Unisex': 'para todos'
  }

  // - Renderizamos la estructura de la página de género.
  return (
    <>
      {/* - Mostramos el título de la página con el género actual y un subtítulo. */}
      <Title
        title={`Artículos de ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      {/* - Mostramos la cuadrícula de productos con la información obtenida. */}
      <ProductGrid
        products={products}
      />

      {/* - Mostramos la paginación para navegar entre las páginas de productos. */}
      <Pagination totalPages={totalPages} />

    </>
  );
}

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** La función `genderPage` cumple con SRP al encargarse únicamente de mostrar la página de género.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** La función `genderPage` depende de abstracciones (como `getPagProduct` y los componentes) en lugar de implementaciones concretas, cumpliendo con DIP.
