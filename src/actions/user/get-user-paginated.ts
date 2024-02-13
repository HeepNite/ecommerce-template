'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"

export const getUserPagnated = async () => {

    const session = await auth()

    if (session?.user.role !== 'admin') {
        return { ok: true, message: ' debe ser un usuario admin' }
    }



    const users = await prisma.user.findMany({
        orderBy: {
            name: 'desc'
        }
    })
    return {
        ok: true,
        users: users
    }
}