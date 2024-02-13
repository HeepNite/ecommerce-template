// Importación de las interfaces y componentes necesarios.
import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

// Definición de la interfaz Props para especificar las propiedades del componente.
interface Props {
  products: Product[]; // Arreglo de productos a mostrar en la cuadrícula.
}

// Componente funcional "ProductGrid" que recibe las propiedades especificadas en la interfaz Props.
export const ProductGrid = ({ products }: Props) => {
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {
        // Mapea cada producto en el arreglo y renderiza el componente "ProductGridItem".
        products.map(product => (
          <ProductGridItem
            key={product.slug}  // Clave única para identificar cada elemento.
            product={product}   // Propiedad del producto pasada al componente "ProductGridItem".
          />
        ))
      }
    </div>
  );
};
/* principios SOLID */
// - **Principio de responsabilidad única (SRP):** El componente `ProductGrid` cumple con SRP al encargarse únicamente de mostrar la cuadrícula de productos, como un robot que solo arma rompecabezas, no legos ni plastilina.
// - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código. Sería como si el robot pudiera cambiar la forma del rompecabezas sin desarmarlo.
// - **Principio de sustitución de Liskov (LSP):** No hay robots aprendices en este código, por lo que no aplica LSP.
// - **Principio de segregación de interfaces (ISP):** No hay instrucciones detalladas para los robots en este código, por lo que no aplica ISP.
// - **Principio de inversión de dependencias (DIP):** El componente `ProductGrid` depende de herramientas generales (como `ProductGridItem`) en lugar de herramientas específicas, cumpliendo con DIP. Es como si el robot usara piezas que sirven para cualquier rompecabezas.