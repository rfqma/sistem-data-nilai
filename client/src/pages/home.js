import React from "react";

import { Card } from "flowbite-react"

const Home = () => {
    return (
        <>
            <Card className="my-20 mx-80 2xl:my-20 2xl:mx-80 xl:my-20 xl:mx-80 lg:my-10 lg:mx-60 md:my-20 md:mx-0 sm:my-0 sm:mx-0">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                    Data Nilai Siswa Sekolah Menengah Pertama 'Veteran'
                </h5>
                <hr />
                <p className="font-normal text-gray-700 ">
                    <ul>
                        <li><a href="/view-data"><span className="text-blue-500">List Data Nilai Siswa</span></a></li>
                        <li><a href="/form-data"><span className="text-blue-500"> Form Data Nilai Siswa</span></a></li>
                    </ul>
                </p>
            </Card>
        </>
    )
}
export default Home