'use client'
import TopNav from '@/components/dashboard-topnav/TopNav'
import React, { useState } from 'react'

const ApprovedVerificationsPage = () => {
    const [query, SetQuery] = useState<string>('')
  return (
    <div>
        <TopNav pageText='Approved Verifications' query={query}/>
    </div>
  )
}

export default ApprovedVerificationsPage