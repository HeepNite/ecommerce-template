'use server'

import prisma from "@/lib/prisma"


export const ProductSlug = async (slug: string) => {

    try {

        const product = await prisma.product.findFirst({
            include: {
                ProductImg: true
            },
            where: {
                slug: slug
            }
        })

        if (!product) return null
        console.log(product)
        return {
            ...product,
            images: product.ProductImg.map(image => image.url)
        }


    } catch (error) {
        throw new Error('Error to get product from slug')
    }

}