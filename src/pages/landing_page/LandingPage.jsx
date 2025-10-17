import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <main className='w-screen h-screen bg-[#1F2129] pb-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-y-scroll'>
            <Header />
            <HeroSection />
            <Footer />
        </main>
    )
}
