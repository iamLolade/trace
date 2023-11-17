"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { GiSpottedBug } from "react-icons/gi";
import classnames from 'classnames';

const Navbar = () => {
    const currentPath = usePathname();
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
                        className={classnames({
                            'text-zinc-900': link.href === currentPath,
                            'text-zinc-500': link.href !== currentPath,
                            'hover:text-zinc-800 transition-colors font-semibold': true
                        })}
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