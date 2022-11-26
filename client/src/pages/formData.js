import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const FormData = () => {

    const [nis, setNis] = useState(0)
    const [namaSiswa, setNamaSiswa] = useState("")
    const [kelasSiswa, setKelasSiswa] = useState("")
    const [nilaiMatematika, setNilaiMatematika] = useState(0)
    const [nilaiBindonesia, setNilaiBindonesia] = useState(0)
    const [nilaiBinggris, setNilaiBinggris] = useState(0)
    const [nilaiIpa, setNilaiIpa] = useState(0)

    const [siswaList, setSiswaList] = useState([])

    let navigate = useNavigate()

    const addData = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/form-data', {
            nis: nis,
            namaSiswa: namaSiswa,
            kelasSiswa: kelasSiswa,
            nilaiMatematika: nilaiMatematika,
            nilaiBindonesia: nilaiBindonesia,
            nilaiBinggris: nilaiBinggris,
            nilaiIpa: nilaiIpa
        }).then(() => {
            setSiswaList([
                ...siswaList,
                {
                    nis: nis,
                    namaSiswa: namaSiswa,
                    kelasSiswa: kelasSiswa,
                    nilaiMatematika: nilaiMatematika,
                    nilaiBindonesia: nilaiBindonesia,
                    nilaiBinggris: nilaiBinggris,
                    nilaiIpa: nilaiIpa
                }
            ])
        })
        navigate('/view-data')
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">Form Nilai</h1>
                        <p className="text-gray-400">Masukkan Data Nilai </p>
                    </div>
                    <div>
                        <form className="mt-5" onSubmit={addData}>
                            <div className="mb-6">
                                <label htmlFor="nis" className="block mb-2 text-sm text-gray-600">Nomor Induk Siswa</label>
                                <input onChange={(event) => { setNis(event.target.value) }} type="number" name="nis" placeholder="0123456" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="namaSiswa" className="block mb-2 text-sm text-gray-600">Nama Siswa</label>
                                <input onChange={(event) => { setNamaSiswa(event.target.value) }} type="text" name="namaSiswa" placeholder="Rifqi Maulana" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="kelasSiswa" className="text-sm text-gray-600">Kelas</label>
                                <input onChange={(event) => { setKelasSiswa(event.target.value) }} type="text" name="kelasSiswa" placeholder="9C" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="nilaiMatematika" className="block mb-2 text-sm text-gray-600">Nilai Matematika</label>
                                <input onChange={(event) => { setNilaiMatematika(event.target.value) }} type="number" name="nilaiMatematika" placeholder="90" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="nilaiBindonesia" className="block mb-2 text-sm text-gray-600">Nilai Bahasa Indonesia</label>
                                <input onChange={(event) => { setNilaiBindonesia(event.target.value) }} type="number" name="nilaiBindonesia" placeholder="80" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="nilaiBinggris" className="block mb-2 text-sm text-gray-600">Nilai Bahasa Inggris</label>
                                <input onChange={(event) => { setNilaiBinggris(event.target.value) }} type="number" name="nilaiBinggris" placeholder="70" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="nilaiIpa" className="block mb-2 text-sm text-gray-600">Nilai IPA</label>
                                <input onChange={(event) => { setNilaiIpa(event.target.value) }} type="number" name="nilaiIpa" placeholder="100" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-2 py-3 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none hover:bg-indigo-700">
                                    Tambah Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormData