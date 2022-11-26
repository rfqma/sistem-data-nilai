import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const register = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response)
        })
        navigate('/')
    }

    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={register}>
                                {/* Username input */}
                                <div className="mb-6">
                                    <input type="text" onChange={(event) => { setUsernameReg(event.target.value) }} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username" />
                                </div>
                                {/* Password input */}
                                <div className="mb-6">
                                    <input type="password" onChange={(event) => { setPasswordReg(event.target.value) }} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <a href="/login" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Sudah Daftar?</a>
                                </div>
                                {/* Submit button */}
                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register