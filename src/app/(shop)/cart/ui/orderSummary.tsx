
'use client'
import { useEffect, useState } from "react";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";

export const OrderSummary = () => {

    const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return !loaded ? (
        <p>Loading...</p>
    ) : (
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
    )
}
