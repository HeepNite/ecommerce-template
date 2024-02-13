'use client'
import clsx from "clsx";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";



export const ProductFilter = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className="relative xl:inline-block hidden ">

                {/* Dropdown toggle button */}
                <button onClick={() => setOpenMenu(!openMenu)} className="relative z-10 block p-2 text-black hover:text-white border border-blue-600 bg-transparent rounded-md hover:bg-blue-500 transition-all duration-300">
                    <CiFilter />
                </button>

                {/*  Dropdown menu */}

                <div
                    className={clsx(
                        'absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right rounded-md',
                        {
                            'scale-y-100  bg-white dark:bg-blue-700 opacity-100 transition-all duration-300 transform': openMenu,
                            'scale-y-0 opacity-0 transition-all duration-300 transform': !openMenu,
                        }
                    )}
                >
                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Precio
                        </span>
                    </a>

                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Género
                        </span>
                    </a>

                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Inventario
                        </span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Tallas
                        </span>
                    </a>
                </div>

            </div >
            <div className="relative inline-block xl:hidden ">

                {/* Dropdown toggle button */}
                <button onClick={() => setOpenMenu(!openMenu)} className="relative z-10 block p-2 text-black hover:text-white border border-blue-600 bg-transparent rounded-md hover:bg-blue-500 transition-all duration-300">
                    <CiFilter />
                </button>

                {/*  Dropdown menu */}

                <div
                    className={clsx(
                        'absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right rounded-md',
                        {
                            'scale-y-100  bg-white dark:bg-blue-700 opacity-100 transition-all duration-300 transform': openMenu,
                            'scale-y-0 opacity-0 transition-all duration-300 transform': !openMenu,
                        }
                    )}
                >
                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Precio
                        </span>
                    </a>

                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Género
                        </span>
                    </a>

                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Inventario
                        </span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-white hover:text-black">

                        <span className="mx-1">
                            Tallas
                        </span>
                    </a>
                </div>

            </div >
            <input className=' w-full border border-blue-600 rounded-md py-1 px-4 outline-none' type="text" placeholder="coloca tu cosulta aquí" />
        </>
    )
}
