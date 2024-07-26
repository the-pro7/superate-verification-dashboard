import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='grid h-dvh gap-6 grid-cols-3 border-4'>
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout