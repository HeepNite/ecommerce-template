import NextAuth, { defaultSession } from "next-auth"



declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            name: string
            email: string
            emailVerifided?: boolean
            role: string
            image?: string
        } & defaultSession['user'] 
    }
}