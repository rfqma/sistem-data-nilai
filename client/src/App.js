import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import ViewData from "./pages/viewData"
import FormData from "./pages/formData"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view-data" element={<ViewData />} />
            <Route path="/form-data" element={<FormData />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
