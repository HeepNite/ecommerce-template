import { ProductImage, QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductInCart = () => {

    const [isLoaded, setIsLoaded] = useState(false)
    const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
    const removeProductCart = useCartStore(state => state.removeCartItems)
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
                            <Link href={`/product/${product.slug}`} className="hover:underline hover:text-blue-900 cursor-pointer">
                                <p> <span className="text-blue-800 font-bold">{product.size} </span> -  {product.title}</p>
                            </Link>
                            <p className="font-bold">${product.price}</p>
                            <QuantitySelector quantity={product.quantity} onQuantityChanged={quantity => updateProductQuantity(product, quantity)} />

                            <button className="underline mt-3" onClick={() => removeProductCart(product)}>
                                Remover
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
