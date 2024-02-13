'use client'

import { PlaceOrderActions } from '@/actions'
import { useAddress, useCartStore } from '@/store'
import { currencyFormat } from '@/utils'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const PlaceOrder = () => {
    const [loaded, setLoaded] = useState(false)
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState('')
    const [isPlacingOrder, setIsPlacingOrder] = useState(false)
    const cart = useCartStore(state => state.cart)
    const cleanCart = useCartStore(state => state.cleanCart)


    useEffect(() => {
        setLoaded(true)
    }, [])

    const addressStore = useAddress(state => state.address)
    const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());

    const { firstName, lastName, address, addressTwo, city, country, postalCode, phone } = addressStore

    const onPlacingOrder = async () => {
        setIsPlacingOrder(true)

        const productsToOrder = cart.map(product => ({
            productId: product.id,
            quantity: product.quantity,
            size: product.size

        }))

        const res = await PlaceOrderActions(productsToOrder, addressStore)

        if (!res.ok) {
            setIsPlacingOrder(false)
            setErrorMessage(res.message)
            return
        }

        cleanCart()
        router.replace('/orders/' + res.order?.id)

    }
    return (

        <div className="bg-white rounded-xl shadow-xl p-7">
            {!loaded ?
                <>
                    <p>cargando.... </p>
                </>
                : <>
                    <h2 className="text-2xl mb-2"></h2>
                    <div className="mb-10 flex flex-col gap-2">

                        <p className="text-xl font-bold capitalize">{firstName}  {lastName}</p>
                        <p className='capitalize'>{address}</p>
                        <p className='capitalize'>{addressTwo ? addressTwo : ''}</p>
                        <p className='capitalize'>{city}, {country}, {postalCode}</p>
                        <p>{phone}</p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />
                    <h2 className="text-2xl mb-2">Resumen de orden</h2>
                    <div className="grid grid-cols-2">
                        <span>No. Productos</span>
                        <span className="text-right">
                            {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
                        </span>

                        <span>Subtotal</span>
                        <span className="text-right">{currencyFormat(subTotal)}</span>

                        <span>Impuestos (15%)</span>
                        <span className="text-right">{currencyFormat(tax)}</span>

                        <span className="mt-5 text-2xl">Total:</span>
                        <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
                    </div>

                    <div className="mt-5 mb-2 w-full">
                        <p className="mb-5">
                            {/* Disclaimer */}
                            <span className="text-xs">
                                Al hacer clic en Colocar orden, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                            </span>
                        </p>

                        <div className='flex flex-col gap-3'>
                            {errorMessage !== '' ? (
                                <p className='bg-red-600/70 text-white p-2 text-center rounded-md'>{errorMessage}</p>
                            ) : null
                            }
                            <button
                                onClick={onPlacingOrder}
                                className={
                                    clsx({
                                        'btn-primary': !isPlacingOrder,
                                        'btn-disable': isPlacingOrder
                                    })
                                }
                            /* href="/orders/123" */>
                                Colocar orden
                            </button>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}
