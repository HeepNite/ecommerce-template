import Image from 'next/image'


export const GraficoAdmin = () => {
    return (
        <div>


            <div className="mt-14 flex flex-col xl:flex-row gap-10 flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                {/* <!-- Primer contenedor -->*/}
                {/* <!-- Sección 1 - Gráfica de Usuarios --> */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 className="text-black text-lg font-semibold pb-1">Usuarios</h2>
                    <div className="my-1"></div> {/* <!-- Espacio de separación --> */}
                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* <!-- Línea con gradiente --> */}
                    <div className="chart-container position: relative; height:150px; width:100%">
                        {/* <!-- El canvas para la gráfica --> */}
                        <Image src='/imgs/chart-exapmle.png' width={800} height={400} alt="" />
                    </div>
                </div>

                {/*  <!-- Segundo contenedor --> */}
                {/* <!-- Sección 2 - Gráfica de Comercios --> */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 className="text-black text-lg font-semibold pb-1">Comercios</h2>
                    <div className="my-1"></div> {/* <!-- Espacio de separación --> */}
                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> {/* <!-- Línea con gradiente --> */}
                    <div className="chart-container position: relative; height:150px; width:100%">
                        {/* <!-- El canvas para la gráfica --> */}
                        <Image src='/imgs/chart-1-example.png' width={600} height={200} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
