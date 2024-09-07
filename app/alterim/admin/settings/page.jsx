import React from 'react';
import Layout from '@/components/AdminDashboard/Layout';
import { settings } from '@/data/admin-data';

const Settings = () => {
  return (
    <Layout>
      <h1 className='font-bold text-2xl mb-2'>Settings</h1>

      <div className='overflow-x-auto w-full max-w-full'>
        <div 
        className='xs:min-w-[110%] sm:min-w-full bg-white p-4 border rounded-lg border-[#004a50]'>
          {settings.map((setting, index) => (
            <div key={index}
            className={`flex my-6 border-b-[2px] border-b-[#gray] justify-between space-x-6 text-sm`}>
              <div className='flex justify-start font-medium'>
                <p className={`${index === 0 ? "font-semibold" : ""}`}>
                  {index === 0 ? setting.name?.toUpperCase() : setting.name}
                  </p>
              </div>
              <div className='flex justify-start w-[40%]'>
                <p className={`${index === 0 ? "font-semibold" : ""}`}>{index === 0 ? setting.value?.toUpperCase() : setting.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Settings;