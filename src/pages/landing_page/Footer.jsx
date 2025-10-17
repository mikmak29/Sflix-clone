import React from 'react'
import Button from '../../components/Button'

export default function Footer() {
    return (
        <footer className='min-w-[320px] w-screen max-w-[880px] h-auto mx-auto px-3 space-y-14'>
            <Button to={'/home'} text={'Go to SFlix'} />
            <div className='space-y-6'>
                <div className='flex justify-center items-center'>
                    <nav className='grid grid-cols-2 gap-7 sm:grid-cols-5 footer-child-style-link'>
                        <a href="#">Android App</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                        <a href="#">Sitemap</a>
                        <a href="#">9anime</a>
                    </nav>
                </div>
                <p className='text-[#4B4F5B] text-sm text-center'>SFlix is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from MoviesCloud and watch it later if you want.</p>
                <h1 className='text-[#8D94A3] text-sm text-center'>© SFlix</h1>
            </div>
        </footer>
    )
}
