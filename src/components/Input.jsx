import React from 'react'

export default function Input({ text, value, onChange, id, name, placeholder, className, ...props }) {
    return (
        <input type={text} value={value} onChange={onChange} id={id} name={name} placeholder={placeholder} className={`w-full bg-white py-3 px-4 rounded-l-lg outline-none placeholder:text-[#6D747D] placeholder:text-[15px] ${className}`} {...props} />
    )
}
