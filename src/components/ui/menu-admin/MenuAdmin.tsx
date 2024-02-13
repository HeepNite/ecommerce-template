'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiFilter } from 'react-icons/ci'

export const MenuAdmin = () => {


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (

        <>
            <div className="p-2 bg-white w-full md:w-80 xl:flex flex-col rounded-md  hidden">
                <nav>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-home mr-2"></i>Ventas
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-file-alt mr-2"></i>Cupones
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-users mr-2"></i>Paquetes
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-store mr-2"></i>Promociones
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-exchange-alt mr-2"></i>Transacciones
                    </a>
                </nav>

                {/* <!-- Señalador de ubicación --> */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-px mt-2" />
                <div className="flex flex-col my-8 gap-5">
                    <div className="flex flex-col justify-center">
                        <div className="relative m-3 flex flex-wrap mx-auto justify-center">

                            <div className="relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-2xl relative">
                                    <Image width={300} height={300} alt="" className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </p>
                                </div>
                                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
                                        <p className="text-md text-gray-800 mt-0">$340</p>
                                    </div>
                                    <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-2xl relative">
                                    <Image width={300} height={300} alt="" className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </p>
                                </div>
                                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
                                        <p className="text-md text-gray-800 mt-0">$340</p>
                                    </div>
                                    <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-2xl relative">
                                    <Image width={300} height={300} alt="" className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </p>
                                </div>
                                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
                                        <p className="text-md text-gray-800 mt-0">$340</p>
                                    </div>
                                    <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-px mt-2" />

                <nav>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-home mr-2"></i>Perfil
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-file-alt mr-2"></i>Imagen de perfil
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-users mr-2"></i> Dirección
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-store mr-2"></i>Cuentas asociadas
                    </a>
                    <a className="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r  hover:from-blue-500 hover:to-blue-700 hover:text-white" href="#">
                        <i className="fas fa-exchange-alt mr-2"></i>Seguridad de la cuenta
                    </a>
                </nav>
            </div>

            <div className="relative inline-block xl:hidden">
                {/* Dropdown toggle button */}
                <button onClick={handleToggle} className="relative z-10 block p-2 text-black hover:text-white border border-blue-600 bg-transparent rounded-md hover:bg-blue-500 transition-all duration-300">
                    <CiFilter />
                </button>

                {/* Dropdown menu */}
                <div className={clsx( 'absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right rounded-md ',
                        {
                            'scale-y-100  bg-white dark:bg-blue-700 opacity-100 transition-all duration-300 transform': isOpen,
                            'scale-y-0 opacity-0 transition-all duration-300 transform': !isOpen,
                        }
                    )}
                >
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Lorem Ipsum
                    </Link>
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        lorem Ipsum
                    </Link>
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Help
                    </Link>

                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Settings
                    </Link>
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Lorem Ipsum
                    </Link>
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Settings
                    </Link>
                    <Link href="/" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Lorem Ipsum
                    </Link>
                </div>
            </div>

        </>


    )
}
