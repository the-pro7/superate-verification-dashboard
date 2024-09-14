'use client'
import TopNav from '@/components/dashboard-topnav/TopNav'
import React, { useState } from 'react'

const DisapprovedVerificationsPage = () => {
    const [query, SetQuery] = useState<string>('')
  return (
    <div>
        <TopNav pageText='Disapproved Verifications' query={query}/>
    </div>
  )
}

export default DisapprovedVerificationsPage