/* eslint-disable camelcase */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
import ClotheModal from './ClotheModal';


const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const DashIcons = () => {
  const router = useRouter();
  const [iconClicked, setIconClicked] = useState<
    'add clothe' |undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const { user } = useUser();


  

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="Add Clothes"
        description="give your clothes in instant"
        handleClick={() => setIconClicked('add clothe')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title=" Cloth Status"
        description="check current status of your clothes"
        className="bg-blue-1"
        // handleClick={() => setIconClicked('isJoiningMeeting')} 
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule  laundry"
        description="pick a time to give your clothes"
        className="bg-purple-1"
        // handleClick={() => setIconClicked('isScheduleMeeting')}    
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Cloth records"
        description="contains all the records of your clothes"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />




      <ClotheModal
              isOpen={iconClicked === 'add clothe'}
              onClose={() => setIconClicked(undefined)}
              title="add clothes"
              className="text-center"
              buttonText="add"
              
              handleClick={() => router.push("/dashboard")}
            />
    </section>
    




  );
};

export default DashIcons;

