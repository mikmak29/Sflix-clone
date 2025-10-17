import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleArrowRight, CircleUserRound, House, Menu, Search, TrendingUp, TvMinimal, TvMinimalPlay } from 'lucide-react'
import { DiAndroid } from "react-icons/di";
import sflixIcon from '../../images/sflix-icon.png'
import Input from '../../components/Input'
import '../../App.css'

export default function Header() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuButton = () => {
        setIsMenuClicked(!isMenuClicked);
        console.log('Clicked')
    }

    return (
        <header className='relativemin-w-[320px] w-screen h-[61px] bg-[#2F3441]'>
            <div className='relative max-w-[1280px] mx-auto p-3 flex justify-between items-center z-50'>
                <div className='flex items-center gap-[1.9rem]'>
                    <Link to='/' className='hidden xl:block'>
                        <img src={sflixIcon} alt="sflix icon" className='size-8 aspect-square cursor-pointer select-none' />
                    </Link>
                    <div onClick={handleMenuButton} className='flex items-center gap-4 cursor-pointer select-none sm:bg-[#444953] sm:p-2 sm:rounded-md sm:gap-2'>
                        <Menu size={21} strokeWidth={2.5} className='text-white' />
                        <h1 className='hidden text-white text-xs font-montserrat sm:block'>Menu</h1>
                        <Link to='/'>
                            <img src={sflixIcon} alt="sflix icon" className='size-8 aspect-square cursor-pointer select-none sm:hidden' />
                        </Link>
                    </div>
                    <div className='hidden items-center xl:flex'>
                        <div className='bg-[#05ACC1] p-[0.44rem]'>
                            <CircleArrowRight size={18} className='text-white' />
                        </div>
                        <Input text={'text'} id={'homeSearchbar'} name={'homeSearchbar'} placeholder={'Enter a title of the movie...'} className={'w-[600px] py-[0.25rem] rounded-l-none rounded-r-lg select-none'} />
                    </div>
                </div>
                <Link to={'/'}>
                    <img src={sflixIcon} alt="sflix icon" className='hidden size-8 aspect-square sm:block xl:hidden' />
                </Link>
                <div className='flex items-center gap-4 select-none'>
                    <Search size={25} className='text-white xl:hidden' />
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <CircleUserRound size={25} className='text-white' />
                        <h1 className='hidden text-white text-sm font-montserrat xl:block'>Login</h1>
                    </div>
                </div>
                <aside className={`absolute top-[61px] left-0 w-full max-w-[320px] h-auto p-4 bg-[#0A0A0A] rounded-br-lg space-y-14 -translate-x-[320px] transform transition-transform duration-500 ease-in-out ${isMenuClicked ? '-translate-x-0 xl:-translate-x-[95px]' : '-translate-x-[420px]'}`} >
                    <div className='space-y-7 home-aside-child home-aside-child-link'>
                        <div>
                            <House size={18} strokeWidth={2.3} color='#FFFFFF' />
                            <a href='#'>Home</a>
                        </div>
                        <div>
                            <TvMinimalPlay size={18} strokeWidth={2.3} color='#FFFFFF' />
                            <a href='#'>Movies</a>
                        </div>
                        <div>
                            <TvMinimal size={18} strokeWidth={2.3} color='#FFFFFF' />
                            <a href='#'>TV Shows</a>
                        </div>
                        <div>
                            <TrendingUp size={18} strokeWidth={2.3} color='#FFFFFF' />
                            <a href='#'>Top IMDB</a>
                        </div>
                        <div>
                            <DiAndroid size={18} color='#FFFFFF' />
                            <a href='#'>TV Shows</a>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='pb-4 text-[#5A5A5A] text-xs tracking-widest select-none'>GENRE</h1>
                        <div className='flex items-center gap-2 home-aside-genre'>
                            <a href="#">Action</a>
                            <a href="#">Action & Adventure</a>
                        </div>
                        <div className='flex items-center gap-2 home-aside-genre'>
                            <a href="#">Adventure</a>
                            <a href="#">Animation</a>
                            <a href="#">Biography</a>
                        </div>
                    </div>
                </aside>
            </div>
            <div className={isMenuClicked ? 'absolute top-0 right-0 w-screen h-screen bg-[#070708] opacity-30 z-10' : ''}></div>
        </header>
    )
}
