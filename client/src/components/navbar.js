import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 flex rounded-b-lg shadow justify-between">
                <div className="container  items-center justify-center p-5 mx-auto text-gray-100 capitalize">
                    <span className="font-bold text-lg">SMP 'V'</span>
                </div>
                <div className="container items-center justify-center p-5 mx-auto text-gray-100 capitalize">
                    <a href="/home" className="border-b-2 border-transparent focus:text-indigo-600 focus:outline-none hover:text-gray-400  hover:border-blue-500 mx-1.5 sm:mx-6">home</a>
                    <a href="/view-data" className="border-b-2 border-transparent focus:text-indigo-600 focus:outline-none hover:text-gray-400  hover:border-blue-500 mx-1.5 sm:mx-6">List Data Siswa</a>
                    <a href="/form-data" className="border-b-2 border-transparent focus:text-indigo-600 focus:outline-none hover:text-gray-400  hover:border-blue-500 mx-1.5 sm:mx-6">Tambah Data Siswa</a>
                </div>
                <div className="container flex items-center justify-center mx-auto text-gray-100 capitalize">

                </div>
            </nav>
        </>
    )
}
export default Navbar