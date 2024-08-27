import React from 'react';
import Layout from '@/components/AdminDashboard/Layout';
import { settings } from '@/data/admin-data';

const Settings = () => {
  return (
    <Layout>
      <h1 className='font-bold text-2xl mb-2'>Settings</h1>

      <div>
        <div 
        className='bg-white p-4 border rounded-lg border-[#004a50]'>
          {settings.map((setting, index) => (
            <div key={index}
            className={`flex my-6 border-b-[2px] border-b-[#gray] justify-between text-sm text-[${setting.color}]`}>
              <div className='flex justify-start font-medium w-1/2'>
                <p>{setting.name}</p>
              </div>
              <div className='flex justify-start w-[40%]'>
                <p>{setting.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Settings;