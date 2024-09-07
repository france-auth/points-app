import React from 'react';
import Layout from '@/components/AdminDashboard/Layout';
import { users } from '@/data/admin-data';
import Image from 'next/image';

const Users = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl'>Users</h1>
        {/* Container to allow horizontal scrolling */}
        <div className="w-full overflow-x-auto hide-scrollbar max-w-full flex mt-3">
          {/* Inner container with min-width to allow content overflow */}
          <div className='flex flex-col min-w-full'>
            {users.map((user, index) => (
              <div
                key={user.id}
                className='flex p-3 border border-[#004a50] overflow-auto xs:min-w-[150%] md:min-w-[110%]  bg-white rounded-lg items-center justify-around'
              >
                  <Image
                    src={user.pfp}
                    alt='user pfp'
                    height={50}
                    width={50}
                    className='flex mr-12'
                  />
                  <p className={`flex mr-auto
                    ${index === 0 
                    ? "font-bold text-base" 
                    : ""
                    }`}>
                      {user.username}
                    </p>
                  <p className={`flex mx-auto  
                    ${index === 0 
                    ? "font-bold text-base" 
                    : ""
                    }`}>
                    {user.date}
                  </p>
                  <p className={`flex ml-auto mr-5 
                    ${index === 0 
                    ? "font-bold text-base" 
                    : ""
                    }`}>
                    {user.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default Users;
