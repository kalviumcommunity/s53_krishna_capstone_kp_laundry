"use client"
import Loader from '@/components/Loader';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';

import { Trash } from 'lucide-react'
import React from 'react' 

const Page = () => {
  const {user}=useUser();
  const clothesData = useQuery(api.clothes.getClothesForm,{email:user?.primaryEmailAddress?.emailAddress|| ''});
  // const clothesData = useQuery(api.clothes.getClothes);
  if (!clothesData) {
    return (
      <div className="">
        <Loader/>
        Loading...
      </div>
    );
  }

  if (clothesData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: No data found
      </div>
    );
  }

  return (
    <div className='mt-3'>
      <h2 className='font-bold text-lg'>Latest Laundry</h2>
      <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
        <h2 className='font-bold'>Order Id</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Status</h2>
      </div>
      {clothesData 
    
      .filter((clothe) => clothe.status === "completed")
      .map((clothe, index) => (
        <div key={index} className='grid grid-cols-4 p-2'>
          <h2>{clothe._id.substring(0, 6)}</h2>
          <h2>{(clothe.shirt || 0) + (clothe.tshirt || 0) + (clothe.trousers || 0) + (clothe.bedsheets || 0) + (clothe.pant || 0) + (clothe.pyjama || 0)}</h2>
          <h2>{new Date(clothe._creationTime).toLocaleDateString()}</h2>
          <h2>
            {/* Uncomment and adjust the following line if delete functionality is needed */}
            {/* <Trash className='text-red-600 cursor-pointer' onClick={() => deleteClothe(clothe._id)} /> */}
            {clothe.status}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Page

