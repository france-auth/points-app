import React from 'react';
import Layout from '@/components/AdminDashboard/Layout';
import { users } from '@/data/admin-data';
import Image from 'next/image';

const Users = () => {
  return (
    <Layout>
      <h1 className='font-bold text-2xl'>Users</h1>

      <div className="w-full ">
        <div className='bg-white w-full rounded-lg mt-4 whitespace-nowrap'>
          {users.map((user) => (
            <div key={user.id}
            className='flex items-center justify-between p-3 border border-b-[#004a50]'>
              <div className='flex items-center'>
                <Image src={user.pfp}
                alt='user pfp'
                height={50}
                width={50}
                className=''/>
                {user.username}
              </div>
              <div>
                {user.date}
              </div>
              <div>
                {user.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Users;