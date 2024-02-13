'use client'

import { deleteProduct } from "@/actions"
import { ProductImage } from "@/components"
import { Product } from "@/interfaces"

import { currencyFormat } from "@/utils"

import Link from "next/link"
import { useState } from "react"
import { RiDeleteBinFill } from "react-icons/ri"


interface Props {
    products: Product[]

}

export const ProductsList = ({ products }: Props) => {

    const [productsList, setProductsList] = useState(products)


    const onDeleteProduct = async (slug: string) => {
        try {
            await deleteProduct(slug)
            setProductsList(productsList.filter(product => product.slug !== slug))
        } catch (error) {

            console.error("Error al eliminar producto:", error)
        }
    }


    return (
        <div>
            <table className="xl:min-w-full hidden xl:table ">
                <thead className="bg-gray-200 border-b">
                    <tr>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Imagen
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Titulo
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Precio
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Género
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Inventario
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            Tallas
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                            eliiminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((product) => (
                        <tr
                            key={product.id}
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <Link href={`/admin/products/${product.slug}`}>

                                    <ProductImage
                                        src={product.images[0]}
                                        width={80}
                                        height={80}
                                        alt={product.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                </Link>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <Link
                                    href={`/admin/products/${product.slug}`}
                                    className="hover:underline"
                                >
                                    {product.title}
                                </Link>
                            </td>
                            <td className="text-sm font-bold  text-gray-900 px-6 py-4 whitespace-nowrap">
                                {currencyFormat(product.price)}
                            </td>

                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {product.gender}
                            </td>

                            <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                {product.inStock}
                            </td>

                            <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                {product.sizes.join(", ")}
                            </td>
                            <td className="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                <button onClick={() => onDeleteProduct(product.slug)}>

                                    <RiDeleteBinFill className='text-red-500 hover:text-red-800 transition-all  duration-300' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="xl:hidden block mt-10">
                {
                    productsList.map((product) => (
                        <>
                            <div key={product.id} className="grid grid-cols-3 gap-y-0">
                                <div>
                                    <Link href={`/admin/products/${product.slug}`}>

                                        <ProductImage
                                            src={product.images[0]}
                                            width={80}
                                            height={80}
                                            alt={product.title}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    </Link>
                                    <Link
                                        href={`/admin/products/${product.slug}`}
                                        className="hover:underline"
                                    >
                                        {product.title.slice(0, 15)}...
                                    </Link>
                                </div>
                                <div className="col-span-2 flex flex-col gap-2 pb-10">
                                    <p className="text-sm font-bold  text-gray-900 px-6 whitespace-nowrap">
                                        <span> Precio: </span>
                                        {currencyFormat(product.price)}
                                    </p>

                                    <p className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                        <span>Genero: </span>
                                        {product.gender}
                                    </p>

                                    <p className=" text-sm text-gray-900 font-bold px-6 whitespace-nowrap">
                                        <span>Stock: </span>
                                        {product.inStock}
                                    </p>

                                    <p className="text-sm text-gray-900 font-bold px-6 whitespace-nowrap">
                                        <span>Tallas: </span>
                                        {product.sizes.join(", ")}
                                    </p>
                                    <p className=" text-gray-900 font-bold px-6 whitespace-nowrap">
                                        <button className="w-full bg-red-600 text-center text-white p-2 rounded-md text-sm" onClick={() => onDeleteProduct(product.slug)}>
                                            eliminar
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>

    )
}

