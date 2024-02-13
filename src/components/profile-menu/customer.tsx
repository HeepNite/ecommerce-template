'use client'

import Image from "next/image";
import { useState } from "react";
import { TableList } from "../ui/table-list/TableList";

export const CustomerProfile = () => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState("");
    const [identificationNumber, setIdentificationNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [streetName, setStreetName] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [apartmentNumber, setApartmentNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");



    // Función para manejar el cambio de la imagen de perfil
    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfileImage(e.target.files[0]);
        }
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar los datos
        // ...

        // Enviar los datos al servidor
        // ...
    };

    return (
        <div className="">
            <form className=" grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-3" onSubmit={handleSubmit}>
                <div className=" col-span-1 xl:col-span-2 flex flex-col items-center mb-4">
                    <div className="rounded-full xl:w-[15rem] xl:h-[15rem] w-[10rem] h-[10rem] overflow-hidden">
                        <Image className="max-h-full max-w-full h-full object-cover " width={300} height={400} src='/imgs/profile.jpeg' alt="Profile" />

                    </div>
                    <label
                        htmlFor="profile-image"
                        className="mt-4 text-sm text-gray-500 cursor-pointer hover:text-gray-700"
                    >
                        Cambiar foto de perfil
                    </label>
                    <input
                        id="profile-image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfileImageChange}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="name"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="birth-date"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Fecha de nacimiento
                    </label>
                    <input
                        id="birth-date"
                        name="birth-date"
                        type="date"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="gender"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Género
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Seleccionar...</option>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                        <option value="other">Otro</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="identification-number"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Número de identificación
                    </label>
                    <input
                        id="identification-number"
                        name="identification-number"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={identificationNumber}
                        onChange={(e) => setIdentificationNumber(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="phone-number"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Número de teléfono
                    </label>
                    <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="street-name"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Nombre de la calle
                    </label>
                    <input
                        id="street-name"
                        name="street-name"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="street-number"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Número de la calle
                    </label>
                    <input
                        id="street-number"
                        name="street-number"
                        type="number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={streetNumber}
                        onChange={(e) => setStreetNumber(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="apartment-number"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Número de apartamento (opcional)
                    </label>
                    <input
                        id="apartment-number"
                        name="apartment-number"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={apartmentNumber}
                        onChange={(e) => setApartmentNumber(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="city"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Ciudad
                    </label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="state"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Provincia/Estado
                    </label>
                    <input
                        id="state"
                        name="state"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="postal-code"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        Código postal
                    </label>
                    <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="country"
                        className="text-sm text-gray-700 font-medium block mb-2"
                    >
                        País
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value="">Seleccionar...</option>
                        {/*   {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))} */}
                    </select>
                </div>
                <button
                    type="submit"
                    className=" col-span-1 xl:col-span-2 mt-4 px-4 py-2 rounded-md bg-blue-500 text-white"
                >
                    Actualizar Datos
                </button>
            </form>

            <div className="mt-28 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                            <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Dinero Recaudado</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+55%</strong>&nbsp;than last week
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"> Usuarios nuevos</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+3%</strong>&nbsp;than last month
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Nuevos Clientes</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Ventas Totales</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
                        </p>
                    </div>
                </div>
            </div>
           
            <TableList />
        </div>
    );
};
