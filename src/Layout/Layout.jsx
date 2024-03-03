import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className='bg-bg-main bg-cover bg-fixed'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout