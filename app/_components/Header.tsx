import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton, auth ,SignInButton, SignedIn, SignedOut, SignUpButton, } from '@clerk/nextjs';

type Props = {}

const Header = async (props: Props) => {
  return( 
  <header className='fixed right-0 left-0 top-0  px-4  backdrop-blur-lg z-[100] flex items-center border-b-[1px] justify-between'>
     <aside className="flex items-center gap-[2px]">
        
        <Image
          src="/logo.svg"
          width={200}
          height={200}
          alt=""
          
        />

    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block text-[#21B7E2] transition">
        <ul className="flex items-center gap-4 list-none">
          <li className=' hover:text-sky-700/75'>
            <Link href="#">Products</Link>
          </li>
          <li  className=' hover:text-sky-700/75'>
            <Link href="#">Pricing</Link>
          </li>
          <li className=' hover:text-sky-700/75'>
            <Link href="#">Clients</Link>
          </li>
          <li className=' hover:text-sky-700/75'>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li className=' hover:text-sky-700/75'>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        {/* <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#21B7E2] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" /> */}
        <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">


                <div>

                <SignedIn><UserButton afterSignOutUrl='/'/> </SignedIn>
                <SignedOut>
                <div className='flex gap-4 items-center'>
                       <a
                    className="rounded-md bg-[#21B7E2] px-5 py-2.5 text-sm font-medium text-white shadow"
                    
                    >
                      <SignInButton/>
                        
                    
                    </a>

                    <div className="hidden sm:flex">
                    <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#21B7E2]"
                        
                    >
                       <SignUpButton/>
                    </a>
                    </div>
                        </div>
                </SignedOut>

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
            
      </aside>
  </header>
  )}

export default Header