

export const InputAdmin = () => {
    return (
        <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400"></i>
            </div>
            <input className="xl:w-[32.8rem] w-[95%] h-10 pl-10 py-1 text-base placeholder-black border border-blue-700 rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
        </div>
    )
}
