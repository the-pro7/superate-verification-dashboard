import TopNav from '@/components/dashboard-topnav/TopNav'
import React from 'react'

const page = () => {
  return (
    <main className='h-dvh col-span-4'>
        <TopNav pageText="Dashboard"/>
        <h1 className='font-bold text-3xl'>Nothing to see here</h1>
    </main>
  )
}

export default page