import React from 'react'

import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-auto">
                <div className="grow">
                    <Navbar />
                    <div className="m-5 ">
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Layout