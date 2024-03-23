import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton, auth } from '@clerk/nextjs';


function Header() {
    const { userId } = auth();

  return (
    <header className="bg-white">
        
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <Image src='/logo.svg' alt='logo' height={350} width={350} className='p-10 '/>
                </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <a className="text-[#21B7E2] transition hover:text-sky-700/75" href="#"> About </a>
                    </li>

                    <li>
                    <a className="text-[#21B7E2] transition hover:text-sky-700/75" href="#"> Careers </a>
                    </li>

                    <li>
                    <a className="text-[#21B7E2] transition hover:text-sky-700/75" href="#"> History </a>
                    </li>

                    <li>
                    <a className="text-[#21B7E2] transition hover:text-sky-700/75" href="#"> Services </a>
                    </li>

                    <li>
                    <a className="text-[#21B7E2] transition hover:text-sky-700/75" href="#"> Projects </a>
                    </li>

                  
                </ul>
                </nav>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">


                <div>
                    {userId ? (
                        <div className='flex gap-4 items-center'>
                        <Link href='/dashboard'>Dashboard</Link>
                        <UserButton afterSignOutUrl='/' />
                        </div>
                    ) : (
                        <div className='flex gap-4 items-center'>
                       <a
                    className="rounded-md bg-[#21B7E2] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                    >
                        <Link href='/sign-in'>
                            login
                        </Link>
                    
                    </a>

                    <div className="hidden sm:flex">
                    <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#21B7E2]"
                        href="#"
                    >
                        <Link href='/sign-up'>
                        Register
                        </Link>
                    </a>
                    </div>
                        </div>
                    )}
                </div>
                   
                </div>

                <div className="block md:hidden">
                    <button className="rounded bg-[#21B7E2] p-2 text-white transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header