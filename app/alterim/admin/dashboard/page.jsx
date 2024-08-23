"use client"

import React from 'react'
import Layout from '@/components/AdminDashboard/Layout';
import { Chart } from '@/components/charts/Chart';

const Dashboard = () => {
  return (
      <Layout>
      <div className=''>
        <h1>Dashboard</h1>
        <Chart />
      </div>
    </Layout>
  )
}

export default Dashboard