'use client'

import { ProductImage } from "@/components";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";

export const ProductInCheckOut = () => {

    const [isLoaded, setIsLoaded] = useState(false)

    const productsInCart = useCartStore(state => state.cart)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            {!isLoaded ? (
                <p>Loading...</p>
            ) : (
                productsInCart.map(product => (
                
                    <div key={`${product.slug}-${product.size}`} className="flex mb-5">
                        <ProductImage
                            src={product.image}
                            width={100}
                            height={100}
                            style={{
                                width: '100px',
                                height: '100px'
                            }}
                            alt={product.title}
                            className="mr-5 rounded"
                        />

                        <div className="flex flex-col gap-y-3 items-start">
                            <span>
                                <p> <span className="text-blue-800 font-bold">{product.size} </span> - {product.title} - ({product.quantity})</p>
                            </span>
                            <p className=""> Precio por unidad ${product.price}</p>
                            <p className="font-bold">Subtotal {currencyFormat(product.price * product.quantity)}</p>


                        </div>
                    </div>
                ))
            )}
        </>
    );
}
