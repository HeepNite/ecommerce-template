 'use client'
 import { useState, useEffect } from "react";
import { IoCardOutline } from "react-icons/io5";

import { Title } from "@/components";
import Link from "next/link";

interface Props {
    orders: {
        OrderAddress: {
            firstName: string;
            lastName: string;
        } | null;
        id: string;
        subTotal: number;
        tax: number;
        total: number;
        itemInOrder: number;
        isPaid: boolean;
        paidAt: Date | null;
        transactionId: string | null;
        createdAt: Date;
        udpateAt: Date;
        userId: string;
    }[];
}

export const TableOrder: React.FC<Props> = ({ orders }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Title title="Orders" className="p-5" />

            <div className="mb-10">
                {isMobile ? (
                    <table className="table-auto w-full overflow-x-auto overflow-y-auto md:hidden">
                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    #ID
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Estado
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {order.id.split("-").at(-1)}
                                    </td>
                                    <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {order.isPaid ? (
                                            <>
                                                <IoCardOutline className="text-green-800" />
                                                <span className="mx-2 text-green-800">Pagada</span>
                                            </>
                                        ) : (
                                            <>
                                                <IoCardOutline className="text-red-800" />
                                                <span className="mx-2 text-red-800">No Pagada</span>
                                            </>
                                        )}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 ">
                                        <Link href={`/orders/${order.id}`} className="hover:underline">
                                            Ver orden
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <table className="table-auto w-full overflow-x-auto overflow-y-auto">
                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    #ID
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py 4 text-left"
                                    >
                                        Nombre completo
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Estado
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Opciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {order.id.split("-").at(-1)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                                        </td>
                                        <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {order.isPaid ? (
                                                <>
                                                    <IoCardOutline className="text-green-800" />
                                                    <span className="mx-2 text-green-800">Pagada</span>
                                                </>
                                            ) : (
                                                <>
                                                    <IoCardOutline className="text-red-800" />
                                                    <span className="mx-2 text-red-800">No Pagada</span>
                                                </>
                                            )}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 ">
                                            <Link href={`/orders/${order.id}`} className="hover:underline">
                                                Ver orden
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </>
        );
    };
    
