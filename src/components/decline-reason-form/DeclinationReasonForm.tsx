import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const DeclinationReasonForm = () => {
  return (
    <form className='flex flex-col gap-3 w-full'>
        <h1 className='text-center font-semibold text-xl'>Reason for declination</h1>
        <Input placeholder='Declination reason...' title='Enter your declination reason'/>
        <Button title='Submit declination reason'>Submit</Button>
    </form>
  )
}

export default DeclinationReasonForm