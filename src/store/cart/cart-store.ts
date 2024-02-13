// Importamos la etiqueta especial CartProduct desde un archivo llamado "interfaces".
import type { CartProduct } from "@/interfaces";

// Importamos la herramienta llamada "create" de la librería "zustand".
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Definimos la estructura del estado que tendrá nuestra tienda.
interface State {

    // En nuestro estado, tenemos un campo llamado "cart" que es una lista de productos en el carrito.
    cart: CartProduct[]

    // También tenemos una función llamada "AddProductToCart" que permite añadir productos al carrito.
    AddProductToCart: (product: CartProduct) => void

    getTotalItems: () => number

    updateProductQuantity: (product: CartProduct, quantity: number) => void

    removeCartItems: (product: CartProduct) => void

    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    };
    cleanCart: () => void
}

// Creamos nuestro almacén de estado usando "create" y especificamos su estructura.
export const useCartStore = create<State>()(

    persist(

        // En esta función, "set" nos permite actualizar el estado, y "get" nos permite acceder al estado actual.
        (set, get) => ({
            // Al principio, nuestro carrito está vacío.
            cart: [],

            getTotalItems: () => {
                const { cart } = get()
                return cart.reduce((total, item) => total + item.quantity, 0)
            },

            getSummaryInformation: () => {
                const { cart } = get()
                const subTotal = cart.reduce(
                    (subTotal, product) => product.quantity * product.price + subTotal, 0
                )
                const tax = subTotal * 0.15
                const total = subTotal + tax
                const itemsInCart = cart.reduce(
                    (total, item) => total + item.quantity, 0
                )
                return {
                    subTotal,
                    tax,
                    total,
                    itemsInCart
                }
            },

            // Esta función añade un producto al carrito.
            AddProductToCart: (product: CartProduct) => {

                // Accedemos al estado actual para verificar si el producto ya está en el carrito.
                const { cart } = get()

                // Comprobamos si el producto ya está en el carrito.
                const productInCart = cart.some((item) => item.id === product.id && item.size === product.size)

                // Si el producto no está en el carrito, lo añadimos.
                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return
                }

                // Si el producto ya está en el carrito, actualizamos la cantidad del producto.
                const updatedCartProducts = cart.map(item => {
                    if (item.id === product.id && item.size === product.size) {
                        // Actualizamos la cantidad del producto existente.
                        return { ...item, quantity: item.quantity + product.quantity }
                    }
                    // Mantenemos el resto de los productos sin cambios.
                    return item
                })

                // Actualizamos el carrito con la nueva lista de productos.
                set({ cart: updatedCartProducts })
            },

            updateProductQuantity: (product: CartProduct, quanty: number) => {

                const { cart } = get()

                const updatedCartproduct = cart.map(item => {
                    if (item.id === product.id && item.size === product.size) {
                        return { ...item, quantity: quanty }
                    }
                    return item
                })
                set({ cart: updatedCartproduct })

            },

            removeCartItems: (product: CartProduct) => {
                const { cart } = get()

                const removeCartProd = cart.filter(
                    (item) => item.id !== product.id || item.size !== product.size)
                set({ cart: removeCartProd })
            },
            cleanCart: () => {
                set({ cart: [] })
            },
        })
        , {
            name: 'store'
        }


    )


)
