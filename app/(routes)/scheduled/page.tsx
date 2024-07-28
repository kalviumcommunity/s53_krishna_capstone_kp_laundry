"use client";
import Loader from '@/components/Loader';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import ReactDatePicker from 'react-datepicker';
import React from 'react';

const Page = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || '';
  const clothesData = useQuery(api.schedule.getSchedule, { email });

  if (!clothesData) {
    return (
      <div className="-my-60">
        <Loader />
        {/* Loading... */}
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

  const formatDateTime = (dateTime:any) => {
    return new Date(dateTime).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className='mt-3'>
      <h2 className='font-bold text-lg'>Latest Laundry</h2>
      <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
        <h2 className='font-bold'>Schedule Id</h2>
        <h2 className='font-bold'>Status</h2>
        <h2 className='font-bold'>Creation Date</h2>
        <h2 className='font-bold'>Scheduled Date & Time</h2>
      </div>
      {clothesData.map((schedule, index) => (
        <div key={index} className='grid grid-cols-4 p-2'>
          <h2>{schedule._id.substring(0, 6)}</h2>
          <h2>{schedule.status}</h2>
          {/* <h2>{schedule._creationTime ? formatDateTime(schedule._creationTime) : 'N/A'}</h2> */}
          <h2>{schedule._creationTime ? new Date(schedule._creationTime).toLocaleDateString() : 'N/A'}</h2>

          <h2>{schedule.dateTime ? formatDateTime(schedule.dateTime) : 'N/A'}</h2>
        </div>
      ))}
    </div>
  );
};

export default Page;
