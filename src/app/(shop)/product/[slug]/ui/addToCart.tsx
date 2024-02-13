'use client'


import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size, CartProduct } from '@/interfaces';
import { useState } from 'react';
import { useCartStore } from "@/store";

interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {


    const addProductToCart = useCartStore(state => state.AddProductToCart)

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)

    const addToCart = () => {
        if (!size) {
            setPosted(true);
        } else {
            setPosted(false);

            const CartProduct: CartProduct = {
                id: product.id,
                slug: product.slug,
                title: product.title,
                price: product.price,
                quantity: quantity,
                size: size,
                image: product.images[0]
            }
            addProductToCart(CartProduct)
        }
    }


    return (
        <>
            {posted && (
                <span className=" mt-2 bg-red-600/70 text-white p-2 shadow-md rounded w-full">
                    necesitas seleccionar una talla
                </span>
            )
            }

            {/* Selector de Tallas */}
            <SizeSelector
                onChangeSize={setSize}
                selectedSize={size}
                availableSizes={product.sizes}
            />

            {/* Selector de Cantidad */}
            <QuantitySelector
                quantity={quantity} onQuantityChanged={setQuantity}
            />

            {/* Button */}
            <button className="btn-primary my-5" onClick={addToCart}>
                Agregar al carrito
            </button>
        </>
    )
}
