import React from 'react'
import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Button({ text, className, to, ...props }) {
    return (
        <Link to={to} className={`group w-fit bg-[#05ACC1] mx-auto py-3 px-8 rounded-full flex items-center gap-4 text-white text-xl font-montserrat font-medium transition-all duration-500 ease-in-out hover:scale-110 shadow-lg hover:shadow-cyan-500/50 ${className}`} {...props}>
            {text} <CircleArrowRight className='transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:translate-x-4'></CircleArrowRight>
        </Link>
    )
}
