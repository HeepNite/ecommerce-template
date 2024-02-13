import { create } from "zustand"
import { persist } from "zustand/middleware"

interface State {
    address: {
        firstName: string
        lastName: string
        address: string
        addressTwo?: string
        postalCode?: string 
        city: string
        country: string
        phone: string
        rememberAddress: boolean
    }

    setAddress: (address: State['address']) => void
}


export const useAddress = create<State>()(
    persist(
        (set, get) => ({
            address: {
                firstName: '',
                lastName: '',
                address: '',
                addressTwo: '',
                postalCode: '',
                city: '',
                country: '',
                phone: '',
                rememberAddress: false
            },
            setAddress: (address) => {
                set({ address })
            },
        }),
        {
            name: 'address-storage'
        }
    )
)