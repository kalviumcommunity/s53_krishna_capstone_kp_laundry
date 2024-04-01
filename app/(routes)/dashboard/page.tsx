"use client"
import useStoreUserEffect from '@/hooks/useStoreuser'
import { useSession } from '@clerk/nextjs'
import { useConvexAuth } from 'convex/react'
import React from 'react'

function Dashboard() {
    const {isAuthenticated,isLoading}=useConvexAuth()
    const {session} = useSession();
    useStoreUserEffect()
    if (session!==undefined){
      console.log(session)
    }
    



  return (
    <div className='mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
    <h1 className='text-4xl font-bold'>Welcome</h1>
    <ul className='list-none mt-10'>
      <li className='mb-2'>
        <span className='font-semibold'>First Name:</span> {session?.user.firstName}
      </li>
      <li className='mb-2'>
        <span className='font-semibold'>Last Name:</span> {session?.user.lastName}
      </li>
      <li className='mb-2'>
        <span className='font-semibold'>Email:</span>{' '}
        {session?.user.emailAddresses[0].emailAddress}
      </li>
    </ul>
  </div>
  )
}

export default Dashboard