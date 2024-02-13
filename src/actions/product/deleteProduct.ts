'use server'

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

import prisma from "@/lib/prisma"

export const deleteProduct = async (slug: string) => {

    const product = await prisma.product.findFirst({
        where: { slug },
        select: {
            id: true,
            ProductImg: {
                select: {
                    url: true,
                },
            },
        },
    });

    if (!product) {

        return {
            ok: false,
            message: 'no se encotro ningun producto con ese nombre'
        }
    }
    try {
        const imgUrls = product.ProductImg.map(img => img.url);
        // Eliminar las imágenes de Cloudinary
        const deletePromises = imgUrls.map(url => {
            // Extraer el public ID de la URL
            const regex = /https:\/\/res\.cloudinary\.com\/(.*)\/image\/upload\/v(.*)\/(.*)\.(?:jpe?g|png|gif)$/i;
            const publicId = url.match(regex)?.[3];

            // Verificamos si la URL es válida antes de usarla
            if (publicId && typeof publicId === 'string') {
                return cloudinary.uploader.destroy(publicId);
            } else {
                // Si la URL no es válida, ignoramos el error y continuamos
                console.warn(`URL de imagen inválida: ${url}`);
                return Promise.resolve();
            }
        });
        await Promise.all(deletePromises);

        await prisma.productImg.deleteMany({
            where: { productId: product.id },
        });


        await prisma.product.delete({
            where: { id: product.id }
        })
        return {
            ok: true,
            message: "Producto eliminado exitosamente",
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'no se logro eliminar el producto'
        }
    }

}