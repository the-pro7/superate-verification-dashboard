import { Link } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='border p-4'>
      <div className='flex items-center flex-col'>
        <h1 className='text-3xl sm:text-2xl font-bold text-center'>Superate</h1>
    <span className='text-slate-500 text-sm sm:text-center'>ADMIN VERIFICATIONS</span>
      </div>
      <Link href="/brands/add-verification-info">Add Brand Verification Info</Link>
    </aside>
  )
}

export default Sidebar