export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getOrderByUser } from "@/actions";
import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { TableOrder } from "./ui/tableOrder";

export default async function OrdersPage() {
  const { ok, orders = [] } = await getOrderByUser();

  if (!ok) {
    redirect("/auth/login");
  }
  return (
    <>
      <Title title="Orders" />

         <TableOrder orders={orders} />
     
    </>
  );
}