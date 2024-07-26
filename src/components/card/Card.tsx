// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropTypes = {
    dataLength: number
    text: string,
    linkText: string
}

const Card = ({dataLength, text, linkText}: PropTypes) => {
  return (
    <div className='p-4 shadow-sm max-w-sm w-fit rounded-md overflow-hidden flex flex-col gap-3'>
        <h4 className='text-xl font-semibold'>{text}</h4>
        <div className='text-3xl font-bold'>{dataLength}</div>
        <Link href="/" className='bg-sky-600 px-4 py-3 text-white font-semibold rounded-md w-fit'>{linkText}</Link>
    </div>
  )
}

export default Card