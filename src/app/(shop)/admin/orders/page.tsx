
export const revalidate = 0;

import { getPaginatedByOrders } from "@/actions";
// https://tailwindcomponents.com/component/hoverable-table
import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { TableOrder } from "../../orders/ui/tableOrder";

export default async function adminOrders() {

    const { ok, orders = [] } = await getPaginatedByOrders();
    console.log(orders)
    
    if (!ok) {
        redirect("/auth/login");
    }

    return (
        <div className="">
             <TableOrder orders={orders} />
    
        </div>
    );
}

