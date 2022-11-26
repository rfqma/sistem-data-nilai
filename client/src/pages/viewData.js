import React, { useState } from "react";
import axios from "axios"


const ViewData = () => {

    const [siswaList, setSiswaList] = useState([])

    const getData = () => {
        axios.get('http://localhost:3001/view-data').then((response) => {
            setSiswaList(response.data)
        })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
                    <div className="mb-3">
                        <button onClick={getData} className="py-2 px-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none hover:bg-indigo-700">
                            <span className="text-white">Show Data</span>
                        </button>
                        <a className="ml-3" href="/form-data">
                            <button className="py-2 px-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none hover:bg-indigo-700">
                                <span className="text-white">Add Data</span>
                            </button>
                        </a>

                    </div>
                    <div>
                        <table className="border-collapse bg-white  w-full mb-32">
                            <thead>
                                <tr>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell rounded-tl-lg">No</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">NIS</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Nama Siswa</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Kelas Siswa</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Nilai Matematika</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Nilai B. Indonesia</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Nilai B. Inggris</th>
                                    <th className="p-3 font-semibold bg-gray-700  text-white white border border-white hidden lg:table-cell">Nilai IPA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {siswaList.map((res, index) => {
                                    return (
                                        <>
                                            <tr className="bg-white  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" key={index}>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 bg-gray-200 text-center border border-white border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">No</span>
                                                    {index + 1}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NIS</span>
                                                    {res.nis}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nama Siswa</span>
                                                    <p className="overflow-hidden truncate w-32">{res.namaSiswa}</p>
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Kelas Siswa</span>
                                                    <p className="overflow-hidden truncate w-32">{res.kelasSiswa}</p>
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nilai Matematika</span>
                                                    {res.nilaiMatematika}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800  border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nilai B. Indonesia</span>
                                                    {res.nilaiBindonesia}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nilai B. Inggris</span>
                                                    {res.nilaiBinggris}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b border-white bg-gray-200 text-center block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nilai IPA</span>
                                                    {res.nilaiIpa}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewData