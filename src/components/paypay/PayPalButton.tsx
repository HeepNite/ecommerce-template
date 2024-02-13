'use client'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { CreateOrderData, CreateOrderActions, OnApproveData, OnApproveActions } from '@paypal/paypal-js'

import React from 'react'
import { setTransactionId } from '../../actions/payment/setTransactionId';
import { paypalCheckPayment } from '@/actions';

interface Props {
    orderId: string
    amount: number

}
export const PayPalButton = ({ orderId, amount }: Props) => {

    const [{ isPending }] = usePayPalScriptReducer()

    const rountedAmount = (Math.round(amount * 100)) / 100



    if (isPending) {

        return (
            <div className='animate-pulse flex flex-col gap-5 items-center'>
                <div className='h-10 w-full bg-gray-300 rounded-lg' />
                <div className='h-10 w-full bg-gray-300 rounded-lg' />
                <div className='h-10 w-full bg-gray-300 rounded-lg' />
                <div className='h-3 w-[8rem] bg-gray-300 rounded-lg' />
            </div>
        )
    }

    const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {

        const transactionID = await actions.order.create({
            purchase_units: [
                {
                    invoice_id: orderId,
                    amount: {
                        value: `${rountedAmount}`
                    }
                }
            ]
        })
        const { ok } = await setTransactionId(orderId, transactionID)

        if (!ok) {
            throw new Error('No se pudo actualizar la orden')
        }

        return transactionID
    }

    const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
        console.log('aproved')
        const details = await actions.order?.capture()
        if (!details) return

        await paypalCheckPayment(details.id)

    }


    return (
        <div className='relative z-0'>
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </div>
    )
}
