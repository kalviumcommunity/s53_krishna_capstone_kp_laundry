"use client"
import DashIcons from '@/components/DashIcons'
import useStoreUserEffect from '@/hooks/useStoreuser'
import { useSession, useUser } from '@clerk/nextjs'
import { useConvexAuth } from 'convex/react'
import React from 'react'

function Dashboard() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const { session } = useSession();
    useStoreUserEffect();

    if (session !== undefined) {
        console.log(session);
    }

    const now = new Date();
    const { user } = useUser();
    const email = user?.primaryEmailAddress?.emailAddress || '';

    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

    // Render a loading state until the email is available
    if (!email) {
        return <div className='flex justify-center items-center'> Loading...</div>;
    }

    return (
        <section className="flex size-full flex-col gap-5 text-white">
            <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
                    <div className="flex flex-col flex-end">
                        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
                        <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
                    </div>
                </div>
            </div>
            <DashIcons email={email} />
        </section>
    );
}

export default Dashboard;
