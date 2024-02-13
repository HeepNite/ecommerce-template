
export const revalidate = 0;

import { getPaginatedByOrders, getUserPagnated } from "@/actions";
// https://tailwindcomponents.com/component/hoverable-table
import { Pagination, Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { UserAdmin } from "./ui/userAdmin";

export default async function adminUsers() {

    const { ok, users = [] } = await getUserPagnated();
    console.log(users)

    if (!ok) {
        redirect("/auth/login");
    }

    return (
        <>
            <Title title="Usuarios" />

            <div className="mb-10">
                <UserAdmin users={users} />
                <Pagination totalPages={ 1 } />
            </div>
        </>
    );
}

