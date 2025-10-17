import React, { useState, useEffect, useRef } from 'react'
import { CircleChevronLeft, House, Menu, TvMinimal, TvMinimalPlay } from 'lucide-react'
import sflixIcon from '../../images/sflix-icon.png'
import '../../App.css'

export default function Header() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const resizeTimerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            // Disable transitions during resize
            setIsResizing(true);

            // Clear existing timer
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }

            // Re-enable transitions after resize stops
            resizeTimerRef.current = setTimeout(() => {
                setIsResizing(false);
            }, 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }
        };
    }, []);

    const handleMenuButton = () => {
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <header className='min-w-[320px] w-screen h-[61px] bg-[#2F3441]'>
            <div className='relative max-w-[1190px] mx-auto z-10 md:p-3 md:flex md:justify-between'>
                <div className='min-w-[320px] w-full bg-[#2F3441] p-3 flex justify-between md:p-0'>
                    <img src={sflixIcon} alt="sflix icon" className='size-8 aspect-square' />
                    <div onClick={handleMenuButton} className='bg-[#444953] p-2 rounded-md flex items-center gap-2 cursor-pointer select-none md:hidden'>
                        <Menu size={21} className='text-white' />
                        <h1 className='text-white text-xs font-montserrat'>Menu</h1>
                    </div>
                </div>
                <nav className={`absolute top-[60px] right-0 w-[120px] pt-2 pb-4 pr-3 pl-5 ${isMenuClicked ? '-z-10' : '-z-50'} flex flex-col items-end gap-5 rounded-bl-xl bg-[#2F3441] transform ${!isResizing ? 'transition-transform duration-700 ease-in-out' : ''} shrink-0 cursor-pointer nav-curve nav-child-style nav-child-style-link md:static md:w-fit md:p-0 md:z-10 md:flex-row md:items-center md:gap-10 md:rounded-none md:translate-y-0 md:transition-none ${!isMenuClicked ? '-translate-y-[280px]' : 'translate-y-0'}`}>
                    <div className=''>
                        <a href="#" className='text-[14px]'>Home</a>
                        <House className='md:hidden' size={27} strokeWidth={1.3} color='#A6F5E3' />
                    </div>
                    <div>
                        <a href="#" className=''>Movies</a>
                        <TvMinimalPlay className='md:hidden' size={27} strokeWidth={1.3} color='#A6F5E3' />
                    </div>
                    <div>
                        <a href="#" className=''>TV Shows</a>
                        <TvMinimal className='md:hidden' size={27} strokeWidth={1.3} color='#A6F5E3' />
                    </div>
                    <div className=''>
                        <a href="#" className=''>Top IMDB</a>
                        <div className='w-[20px] h-auto bg-[#F5C703] py-1 px-3 rounded-lg flex flex-col items-center [&>h1]:text-[12px] [&>h1]:font-montserrat [&>h1]:font-bold md:hidden'>
                            <h1>I</h1>
                            <h1>M</h1>
                            <h1>D</h1>
                            <h1>B</h1>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
