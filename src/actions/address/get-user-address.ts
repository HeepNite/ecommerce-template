'use server'

import prisma from "@/lib/prisma"

export const getUserAddres = async (userId: string) => {
    try {

        const serverAddress = await prisma.userAddress.findUnique({
            where: { userId }
        })

        if (!serverAddress) return null

        const { countryId, addressTwo, postalCode, ...rest } = serverAddress

        return {
            ...rest,
            country: countryId,
            address: addressTwo ? addressTwo : '',
            postalCode: postalCode ? postalCode : ''
        }

    } catch (error) {
        console.log(error)
        return null
    }

}