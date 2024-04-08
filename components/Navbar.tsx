import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return  (
    <nav className=" flex-between fixed z-50 w-full px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          width={150}
          height={150}
          alt="Logo"
          className=""
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar