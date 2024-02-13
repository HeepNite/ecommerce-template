'use server'

import { auth } from "@/auth.config"
import type { Size, Address } from "@/interfaces"
import prisma from "@/lib/prisma"


interface ProductToOrder {
    productId: string
    quantity: number
    size: Size
}

export const PlaceOrderActions = async (productId: ProductToOrder[], address: Address) => {

    const session = await auth()
    if (!session?.user.id) return { ok: false, message: 'todo no esta oki, no lo tengo caminando por el espress way' }


    const getProducts = await prisma.product.findMany({
        where: {
            id: {
                in: productId.map(p => p.productId)
            }
        }
    })

    const itemsInOrder = productId.reduce((count, p) => count + p.quantity, 0)

    const { subTotal, tax, total } = productId.reduce((totals, item) => {


        const productQuantity = item.quantity
        const product = getProducts.find(product => product.id === item.productId)

        if (!product) { throw new Error(`${item.productId} no existe - 500 `) }

        const subTotal = product.price * productQuantity

        totals.subTotal += subTotal
        totals.tax += subTotal * 0.15
        totals.total += subTotal * 1.15
 
        return totals

    }, { subTotal: 0, tax: 0, total: 0 })



    try {
        const prismaTx = await prisma.$transaction(async (tx) => {


            const udapteProductQuantity = getProducts.map(async (product) => {

                const productQuantity = productId.filter(p => p.productId === product.id).reduce((acc, item) => item.quantity + acc, 0)

                if (productQuantity === 0) {
                    throw new Error(`${product.id} no tiene cantidad definida`)
                }
                return tx.product.update({
                    where: { id: product.id },
                    data: {
                        inStock: {
                            decrement: productQuantity
                        }
                    }
                })
            })
            const updateProducts = await Promise.all(udapteProductQuantity)

            updateProducts.forEach(product => {
                if (product.inStock < 0) {
                    throw new Error(`${product.title} no tiene Inventario suficiente`)
                }
            })


            const order = await tx.order.create({
                data: {
                    userId: session.user.id,
                    itemInOrder: itemsInOrder,
                    subTotal: subTotal,
                    tax: tax,
                    total: total,
                    OrderItem: {
                        createMany: {
                            data: productId.map(p => ({
                                quantity: p.quantity,
                                size: p.size,
                                productId: p.productId,
                                price: getProducts.find(product => product.id === p.productId)?.price ?? 0
                            }))
                        }
                    }
                }
            })

            const { country, rememberAddress, ...rest } = address
            const orderAddress = await tx.orderAddress.create({
                data: {
                    ...rest,
                    countryId: country,
                    orderId: order.id
                }
            })

            return {
                order: order,
                orderAddress: orderAddress,
                updatedProducts: updateProducts

            }
        })

        return {
            ok: true,
            order: prismaTx.order, 
            prismaTx: prismaTx
        }

    } catch (error: any) {
        return {
            ok: false,
            message: error?.message,
        }
    }





}