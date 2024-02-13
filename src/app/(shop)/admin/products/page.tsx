
export const revalidate = 0;

import { getPagProduct } from "@/actions";

import { Pagination, Title } from "@/components";


import Link from "next/link";
import { ProductFilter } from "@/components/ui/product-filter/ProductFilter";
import { ProductsList } from "./ui/productsList";


// Definimos las propiedades que recibirá nuestro componente.
interface Props {
  searchParams: {
    page?: string  // Parámetro opcional de la página actual.
  }
}

export default async function adminProducts({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Obtenemos la información necesaria para mostrar productos, la página actual y el total de páginas.
  const { products, totalPages } = await getPagProduct({ page });

  return (
    <div className="p-4 xl:p-0">
      <Title title="products" />

      <div className="flex flex-col xl:flex-row gap-5 justify-between mb-5">
        <Link href="/admin/products/new" className="btn-primary  text-center xl:text-left">
          Nuevo producto
        </Link>
        <div className="flex items-center gap-3">
          <ProductFilter />
        </div>
      </div>


      <div className="mb-10">
        <ProductsList products={products} />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

