'use client'
import Image from "next/image"
import { TableList } from "../ui/table-list/TableList"
import { GraficoAdmin } from "../ui/graficos/GraficoAdmin"
import { ShortCut } from "../ui/shoercut/ShortCut"
import { MenuAdmin } from "../ui/menu-admin/MenuAdmin"
import { InputAdmin } from "../ui/input-admin/InputAdmin"


export const AdminProfile = () => {
    return (
        <>
            {/*<!-- Contenido principal -->*/}
            <div className="grid xl:grid-cols-5 xl:items-start pr-2 items-center grid-cols-9 gap-x-14 w-full ">
                {/*<!-- Barra lateral de navegación (oculta en dispositivos pequeños) -->*/}
                <MenuAdmin />
                {/* <!-- Área de contenido principal -->*/}

                <div className=" row-start-1 col-start-2 col-end-10 xl:col-start-4 xl:col-end-6">

                    <InputAdmin />
                </div>
                <div className=" xl:row-start-1 col-start-1 xl:col-start-2 xl:col-end-6 col-end-10 flex-1 pr-4 w-full">

                    {/* shortcuts */}
                    <ShortCut />
                    {/*<!-- Contenedor de Gráficas -->*/}
                    <GraficoAdmin />

                    {/* <!-- Tercer contenedor debajo de los dos anteriores -->*/}
                    {/*  <!-- Sección 3 - Tabla de Autorizaciones Pendientes --> */}
                    <TableList />

                    {/*  <!-- Cuarto contenedor --> */}
                    {/* <!-- Sección 4 - Tabla de Transacciones --> */}
                    <TableList />
                </div>
            </div>

        </>
    )
}
