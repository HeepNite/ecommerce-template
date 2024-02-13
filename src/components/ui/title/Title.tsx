//Importación de la fuente del título desde la configuración de fuentes.
import { titleFont } from '@/config/fonts';

// Definición de la interfaz Props para especificar las propiedades del componente.
interface Props {
  title: string;        // Título principal del componente.
  subtitle?: string;    // Subtítulo opcional del componente.
  className?: string;   // Clase CSS opcional para personalizar el estilo del componente.
}

// Componente funcional "Title" que recibe las propiedades especificadas en la interfaz Props.
export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={ `mt-3 ${ className }` }>
      {/* Elemento de encabezado con estilos de fuente y clases adicionales. */}
      <h1 className={ `${ titleFont.className } antialiased text-4xl font-semibold my-7` }>
        { title } {/* Contenido del título principal */}
      </h1>

      {/* Verifica si hay un subtítulo y lo muestra con estilos adicionales. */}
      {
        subtitle && (
          <h3 className="text-xl mb-5">{ subtitle }</h3>
        )
      }
    </div>
  );
}
/* principios SOLID */ 

//  - **Principio de responsabilidad única (SRP):** El componente `Title` cumple con SRP al encargarse únicamente de mostrar títulos y subtítulos, como un robot que solo hace carteles, no libros ni revistas.
//  - **Principio de abierto-cerrado (OCP):** No se observa una clara aplicación de OCP en este código. Sería como si el robot pudiera cambiar el tamaño de los carteles sin desarmarlos.
//  - **Principio de sustitución de Liskov (LSP):** No hay robots aprendices en este código, por lo que no aplica LSP.
//  - **Principio de segregación de interfaces (ISP):** No hay instrucciones detalladas para los robots en este código, por lo que no aplica ISP.
//  - **Principio de inversión de dependencias (DIP):** El componente `Title` depende de herramientas generales (como `className`) en lugar de herramientas específicas, cumpliendo con DIP. Es como si el robot usara pegamento y tijeras que sirven para cualquier cartel.