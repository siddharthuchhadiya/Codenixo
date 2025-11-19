import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className=' text-white min-h-screen flex flex-col'>
    <Header />
        <main className='flex-1 w-full'>
            <Outlet />
        </main>
    <Footer />
    </div>
    </>
  )
}