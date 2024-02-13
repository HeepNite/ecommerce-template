import Image from "next/image";
import { useState, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";


interface Autorizacion {
    foto: string;
    nombre: string;
    tipo: string;
    detalle: string;
}

export const TableList = () => {

    const [autorizacionesPenientes, setAutorizacionesPendientes] = useState<Autorizacion[]>([]);

    useEffect(() => {
        // Simulación de la obtención de datos
        const data: Autorizacion[] = [
            {
                foto: "https://via.placeholder.com/40",
                nombre: "Juan Pérez",
                tipo: "Comercio",
                detalle: "Lorem Ipsum is simply dummy text of thenis Lorem Ipsum is simply dummy text of thenis",
            },
            {
                foto: "https://via.placeholder.com/40",
                nombre: "María Gómez",
                tipo: "Usuario",
                detalle: "Lorem Ipsum is simply dummy text of thenis Lorem Ipsum is simply dummy text of thenis",
            },
            {
                foto: "https://via.placeholder.com/40",
                nombre: "Carlos López",
                tipo: "Usuario",
                detalle: "Lorem Ipsum is simply dummy text of thenis Lorem Ipsum is simply dummy text of thenis",
            },
            {
                foto: "https://via.placeholder.com/40",
                nombre: "Laura Torres",
                tipo: "Comercio",
                detalle: "Lorem Ipsum is simply dummy text of thenis Lorem Ipsum is simply dummy text of thenis",
            },
            {
                foto: "https://via.placeholder.com/40",
                nombre: "Ana Ramírez",
                tipo: "Usuario",
                detalle: "Lorem Ipsum is simply dummy text of thenis Lorem Ipsum is simply dummy text of thenis",
            },
        ];
        setAutorizacionesPendientes(data);
    }, []);

    const handleVerMas = () => {
        // Implementar la lógica para ver más autorizaciones
        console.log("Ver más");
    };


    return (
        <>
            <div className="mt-28 bg-white p-4 shadow rounded-lg xl:block hidden">
                <h2 className="text-black text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                <div className="my-1"></div> {/* <!-- Espacio de separación --> */}
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* <!-- Línea con gradiente --> */}
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="text-sm leading-normal">
                            <th className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                            <th className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Producto</th>
                            <th className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Estado</th>
                            <th className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                            {autorizacionesPenientes.map((autorizacion) => (
                                <tr key={autorizacion.nombre} className="hover:bg-grey-lighter">
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={autorizacion.foto}
                                            alt="Foto Perfil"
                                            className="rounded-full h-10 w-10"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        {autorizacion.nombre}</td>
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        {autorizacion.tipo}
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light w-[30rem]">
                                        {autorizacion.detalle}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                {/* <!-- Botón "Ver más" para la tabla de Autorizaciones Pendientes --> */}
                <div className="text-right mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                    </button>
                </div>
            </div>

            <div className="xl:hidden">
                <div className="mt-14 bg-white p-4 shadow rounded-lg">
                    <h2 className="text-black text-lg font-semibold pb-4">
                        Autorizaciones Pendientes
                    </h2>
                    <div className="my-1"></div> {/* */}
                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* */}

                    {/* Tabla con encabezados adaptables a móviles */}
                    <table className="w-full table-auto text-sm">
                        <thead>
                            <tr className="text-sm leading-normal">
                                <th
                                    className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light md:hidden"
                                >
                                    Foto
                                </th>
                                <th
                                    className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light md:table-cell "
                                >
                                    Producto
                                </th>
                                <th
                                    className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light md:table-cell"
                                >
                                    Estado
                                </th>
                                <th
                                    className="py-2 text-start px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light hidden"
                                >
                                    Detalle
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {autorizacionesPenientes.map((autorizacion) => (
                                <tr key={autorizacion.nombre} className="hover:bg-grey-lighter">
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={autorizacion.foto}
                                            alt="Foto Perfil"
                                            className="rounded-full h-10 w-10"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light md:hidden">
                                        {autorizacion.nombre}</td>
                                    <td className="py-2 px-4 border-b border-grey-light md:hidden">
                                        {autorizacion.tipo}
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light w-[30rem] hidden">
                                        {autorizacion.detalle}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Botón "Ver más" adaptable a móviles */}
                    <div className="text-right mt-4 md:flex justify-end hidden">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center"
                            onClick={handleVerMas}
                        >
                            Ver más
                            <IoIosArrowDown className="ml-2" />
                        </button>
                    </div>
                    <div className="text-center mt-4 md:hidden">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                            onClick={handleVerMas}
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </>


    )
}
