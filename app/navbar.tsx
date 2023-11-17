import Link from 'next/link'
import React from 'react'
import { GiSpottedBug } from "react-icons/gi";

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues'}
    ]

    return (
        <nav className='flex space-x-8 border-b mb-5 px-16 h-14 items-center'>
            <Link href="/">
                <GiSpottedBug size={24} />
            </Link>
            <ul className='flex space-x-6'>
                {links?.map(link => (
                    <li 
                        key={link.href}
                        className='font-semibold text-zinc-500 hover:text-zinc-800 transition-colors'
                    >
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar