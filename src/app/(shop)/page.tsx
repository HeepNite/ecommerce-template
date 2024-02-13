// Importamos las funciones y componentes necesarios para construir nuestra página de inicio.
import { getPagProduct } from '@/actions';  // Obtenemos la función que carga los productos paginados.
import { ProductGrid, Title, Pagination } from '@/components';  // Importamos componentes reutilizables para mostrar productos, títulos y paginación.
import { redirect } from 'next/navigation';  // Importamos la función de redirección de Next.js.

// Definimos las propiedades que recibirá nuestro componente.
interface Props {
  searchParams: {
    page?: string  // Parámetro opcional de la página actual.
  }
}

// Función principal del componente Home.
export default async function Home({ searchParams }: Props) {

  // Convertimos el número de página a un entero, o usamos 1 si no hay parámetro de página.
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Obtenemos la información necesaria para mostrar productos, la página actual y el total de páginas.
  const { products, totalPages } = await getPagProduct({ page });

  // Verificamos si no hay productos, y en ese caso redirigimos al usuario a la página principal.
  if (products.length === 0) {
    redirect('/');
  }

  // Renderizamos la estructura de la página de inicio.
  return (
    <section className='p-5 xl:p-2'>
      {/* Mostramos el título de la tienda y un subtítulo. */}
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      {/* Mostramos la cuadrícula de productos con la información obtenida. */}
      <ProductGrid
        products={products}
      />

      {/* Mostramos la paginación para navegar entre las páginas de productos. */}
      <Pagination totalPages={totalPages} />
    </section>
  );
}

// Sobre los principios SOLID:

// - **Principio de responsabilidad única (SRP):** El componente `Home` cumple con SRP al encargarse únicamente de mostrar la página de inicio.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código.
// - **Principio de sustitución de Liskov (LSP):** No hay clases derivadas en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay interfaces en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** El componente `Home` depende de abstracciones (como `getPagProduct` y los componentes) en lugar de implementaciones concretas, cumpliendo con DIP.
