// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropTypes = {
    dataLength: number
    text: string,
    linkText: string
}

const InfoCard = ({dataLength, text, linkText}: PropTypes) => {
  return (
    <div className='mt-4 p-4 shadow-lg max-w-md lg:w-max w-full rounded-md overflow-hidden flex flex-col gap-3'>
        <h4 className='text-xl font-semibold'>{text}</h4>
        <div className='text-3xl font-bold text-center'>{dataLength}</div>
        <Link href="/" className='btn bg-sky-600 px-4 py-2 text-white font-semibold rounded-md w-full text-center'>{linkText}</Link>
    </div>
  )
}

export default InfoCard