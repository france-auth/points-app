"use client"

import React from 'react'
import Layout from '@/components/AdminDashboard/Layout';
import { Chart } from '@/components/charts/Chart';
import { dashCards } from '@/data/admin-data';
import { usersIcon } from '@/public/assets/admin-images';
import Image from 'next/image';

const Dashboard = () => {
  return (
      <Layout>
        <h1 className='font-bold text-2xl'>Dashboard</h1>
        <div className='mb-3 sm:flex sm:flex-wrap'>
          {dashCards.map((dash) => (
            <div key={dash.id}
            className={`bg-white sm:w-1/2 p-5 rounded-lg my-4 w-full`}>
              <div className='flex flex-1 justify-between'>
                <h2 className='font-medium text-sm'>{dash.title}</h2>
                <Image src={usersIcon}
                alt='usersIcon'/>
              </div>
              <h1 
              className='font-bold text-3xl overflow-hidden'>{dash.figure}</h1>
              <p className='text-[13px] mt-1 text-[#1f7882]'>{dash.increase} </p>
            </div>
          ))}
        </div>
        <Chart />
    </Layout>
  )
}

export default Dashboard