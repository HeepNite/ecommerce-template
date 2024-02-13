'use client'
import { getStockBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react"

interface Props {
    slug: string
}

export const Stock = ({ slug }: Props) => {

    const [stock, setStock] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getStock = async () => {
          try {
            const inStock = await getStockBySlug(slug);
            setStock(inStock);
            setIsLoading(false);
          } catch (error) {
            console.error('Error al obtener el stock:', error);
            setIsLoading(false);
          }
        };
    
        getStock();
      }, [setIsLoading, setStock, slug]);
      
    return (
        <>
            {isLoading ? (
                <h1 className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
                    &nbsp;
                </h1>
            ) : (
                <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
                    stock: {stock}
                </h1>
            )
            }
        </>
    )
}
