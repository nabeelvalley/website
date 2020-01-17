import React, { Suspense, lazy } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

import './Layout.css'


const Layout = ({ children }) => (
    <div className="App">
        <Navbar />
        {children}
        <Footer />
    </div>
)
export default Layout