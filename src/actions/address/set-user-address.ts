'use server'

import type { Address } from "@/interfaces"
import prisma from "@/lib/prisma"




export const setUserAddress = async (address: Address, userId: string) => {

    try {
        const newAddress = await createOrReplaceAddress(address, userId)

        return {
            ok: true,
            address: newAddress,
            message: 'aqui todo esta OKI'
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'no se puede grabar en bases de datos'
        }
    }

}


const createOrReplaceAddress = async (address: Address, userId: string) => {
    console.log('user id', userId)
    try {
        const storeAddress = await prisma.userAddress.findUnique({
            where: { userId }
        })
        const addressToSave = {
            userId,
            address: address.address,
            addressTwo: address.addressTwo,
            countryId: address.country,
            city: address.city,
            firstName: address.firstName,
            lastName: address.lastName,
            phone: address.phone,
            postalCode: address.postalCode
        };


        if (!storeAddress) {
            const newAddress = await prisma.userAddress.create({
                data: addressToSave
            })
            return newAddress
        }

        const updateAddress = await prisma.userAddress.update({
            where: { userId },
            data: addressToSave
        })
        return updateAddress

    } catch (error) {
        console.log(error)
        throw new Error('No se pudo grabar la direccion')
    }

}